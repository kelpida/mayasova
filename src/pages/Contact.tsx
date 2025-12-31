import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail } from 'lucide-react';

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
  return (
    <Layout>
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
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input
                    placeholder="Full Name *"
                    className="h-12 border-border bg-background"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Phone Number *"
                    type="tel"
                    className="h-12 border-border bg-background"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input
                    placeholder="Email Address *"
                    type="email"
                    className="h-12 border-border bg-background"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Company Name"
                    className="h-12 border-border bg-background"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Select>
                    <SelectTrigger className="h-12 border-border bg-background">
                      <SelectValue placeholder="What type of staff are you looking for?" />
                    </SelectTrigger>
                    <SelectContent>
                      {staffTypes.map((type) => (
                        <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Textarea
                    placeholder="Message"
                    className="min-h-[48px] border-border bg-background resize-none"
                    rows={1}
                  />
                </div>
              </div>

              <div className="text-center pt-4">
                <Button type="submit" variant="default" size="lg">
                  Submit
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
            className="font-serif text-4xl text-center text-foreground mb-16"
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
