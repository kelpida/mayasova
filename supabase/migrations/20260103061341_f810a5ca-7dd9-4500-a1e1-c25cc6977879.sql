-- Add explicit policy to block all SELECT access to contact submissions
-- This protects sensitive personal information from unauthorized access
CREATE POLICY "No public read access to contact submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (false);