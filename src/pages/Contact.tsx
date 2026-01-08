import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { SEO } from '@/components/seo/SEO';

const staffTypes = [
  'Domestic Staff',
  'Hotel Staff',
  'Restaurant Staff',
  'Bakery Staff',
  'Spa & Wellness Staff',
  'Construction Workers',
  'Factory Workers',
  'Other',
];

const offices = [
  {
    city: 'Limassol',
    address: '4 Kamelias Street, Ekali, 3110 Limassol, Cyprus',
    coordinates: { lat: 34.6841, lng: 33.0379 },
  },
  {
    city: 'Nicosia',
    address: 'Nicosia, Cyprus',
    coordinates: { lat: 35.1856, lng: 33.3823 },
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    email: '',
    company_name: '',
    staff_type: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, staff_type: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.full_name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        full_name: '',
        phone: '',
        email: '',
        company_name: '',
        staff_type: '',
        message: '',
      });
    } catch (error: any) {
      console.error('Submission error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Get in touch with Mayiasova Services. Visit our offices in Limassol and Nicosia or contact us for professional and domestic staff recruitment in Cyprus."
        keywords="contact mayiasova, recruitment agency contact, limassol office, nicosia office, cyprus employment agency phone"
        canonicalUrl="/contact"
      />
      {/* Hero */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're here to answer your questions and support your recruitment needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 pb-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto bg-card border border-border rounded-sm p-8 md:p-12 shadow-soft"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleInputChange}
                    placeholder="Full Name *"
                    className="h-12 border-border bg-background"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number *"
                    type="tel"
                    className="h-12 border-border bg-background"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address *"
                    type="email"
                    className="h-12 border-border bg-background"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleInputChange}
                    placeholder="Company Name"
                    className="h-12 border-border bg-background"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Select value={formData.staff_type} onValueChange={handleSelectChange}>
                    <SelectTrigger className="h-12 border-border bg-background">
                      <SelectValue placeholder="What type of staff are you looking for?" />
                    </SelectTrigger>
                    <SelectContent>
                      {staffTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    className="min-h-[48px] border-border bg-background resize-none"
                    rows={1}
                  />
                </div>
              </div>

              <div className="text-center pt-4">
                <Button type="submit" variant="default" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Submit'
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl text-center text-foreground md:mb-16"
          >
            Our Offices
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="font-serif text-2xl text-foreground mb-4">
                  {office.city}
                </h3>
                
                {/* Map placeholder */}
                <div className="aspect-[4/3] bg-card border border-border rounded-sm mb-4 overflow-hidden">
                  <iframe
                    title={`${office.city} Office Location`}
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${office.coordinates.lng - 0.01},${office.coordinates.lat - 0.01},${office.coordinates.lng + 0.01},${office.coordinates.lat + 0.01}&layer=mapnik&marker=${office.coordinates.lat},${office.coordinates.lng}`}
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>

                <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
                  <MapPin size={16} />
                  <span>{office.address}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-primary-foreground/60" />
              <span>+357 25 334 477</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-primary-foreground/60" />
              <span>vasileiana.law@hotmail.com</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
