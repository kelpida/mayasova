import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactSubmission {
  full_name: string;
  phone: string;
  email: string;
  company_name?: string;
  staff_type?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const submission: ContactSubmission = await req.json();
    
    console.log("Received contact submission:", submission);

    // Create Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Save to database
    const { data: savedSubmission, error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        full_name: submission.full_name,
        phone: submission.phone,
        email: submission.email,
        company_name: submission.company_name || null,
        staff_type: submission.staff_type || null,
        message: submission.message || null,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Failed to save submission: ${dbError.message}`);
    }

    console.log("Submission saved to database:", savedSubmission);

    // Send notification email to admin
    const adminEmailResponse = await resend.emails.send({
      from: "Mayiasova <onboarding@resend.dev>",
      to: ["vasileiana.law@hotmail.com"],
      subject: `New Contact Form Submission from ${submission.full_name}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${submission.full_name}</p>
        <p><strong>Phone:</strong> ${submission.phone}</p>
        <p><strong>Email:</strong> ${submission.email}</p>
        ${submission.company_name ? `<p><strong>Company:</strong> ${submission.company_name}</p>` : ''}
        ${submission.staff_type ? `<p><strong>Staff Type:</strong> ${submission.staff_type}</p>` : ''}
        ${submission.message ? `<p><strong>Message:</strong> ${submission.message}</p>` : ''}
        <hr>
        <p>Submitted at: ${new Date().toLocaleString()}</p>
      `,
    });

    console.log("Admin notification sent:", adminEmailResponse);

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: "Mayiasova <onboarding@resend.dev>",
      to: [submission.email],
      subject: "Thank you for contacting Mayiasova",
      html: `
        <h1>Thank you for reaching out, ${submission.full_name}!</h1>
        <p>We have received your inquiry and will get back to you as soon as possible.</p>
        <p>Here's a summary of your submission:</p>
        <ul>
          ${submission.staff_type ? `<li><strong>Staff Type:</strong> ${submission.staff_type}</li>` : ''}
          ${submission.message ? `<li><strong>Message:</strong> ${submission.message}</li>` : ''}
        </ul>
        <p>Best regards,<br>The Mayiasova Team</p>
        <hr>
        <p style="color: #666; font-size: 12px;">
          4 Kamelias Street, Ekali, 3110 Limassol, Cyprus<br>
          Phone: +357 25 334 477
        </p>
      `,
    });

    console.log("User confirmation sent:", userEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Submission saved and emails sent successfully" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
