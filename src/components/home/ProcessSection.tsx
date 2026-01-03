import { motion } from 'framer-motion';
import { ClipboardList, FileSearch, Users, FileText, GraduationCap, HeartHandshake } from 'lucide-react';

const processSteps = [
  { icon: ClipboardList, title: 'Client needs assessment', description: 'We identify your role requirements and expectations.' },
  { icon: FileSearch, title: 'CV Collection & Screening', description: 'We gather and assess candidate profiles from trusted partners.' },
  { icon: Users, title: 'Interview process', description: 'We conduct first interviews and coordinate employer discussions.' },
  { icon: FileText, title: 'Legal Paperwork', description: 'We manage all contracts, permits, and immigration documents.' },
  { icon: GraduationCap, title: 'Staff Training', description: 'Domestic workers receive essential role-specific training.' },
  { icon: HeartHandshake, title: 'Ongoing Support', description: 'We stay connected to ensure smooth, long-term cooperation.' },
];

const CurvedArrow = ({ className = '' }: { className?: string }) => (
  <svg 
    viewBox="0 0 221 53" 
    fill="none" 
    className={`w-16 h-5 ${className}`}
  >
    <path 
      d="M220.622 22.2707C220.812 21.7524 220.547 21.1776 220.029 20.9868L211.583 17.8777C211.064 17.6869 210.49 17.9524 210.299 18.4707C210.108 18.989 210.373 19.5638 210.892 19.7546L218.399 22.5182L215.636 30.0257C215.445 30.544 215.71 31.1188 216.229 31.3096C216.747 31.5004 217.322 31.2349 217.512 30.7166L220.622 22.2707ZM0.683105 0.730225L-7.57575e-05 1.46047C33.8473 33.1262 65.3113 49.418 100.177 52.273C135.005 55.1249 173.073 44.5542 220.102 22.8331L219.683 21.9252L219.264 21.0174C172.341 42.6893 134.653 53.0894 100.34 50.2797C66.0655 47.4731 35.0053 31.4708 1.36629 -2.42591e-05L0.683105 0.730225Z" 
      fill="currentColor"
      className="text-white/40"
    />
  </svg>
);

export const ProcessSection = () => {
  const topRow = processSteps.slice(0, 3);
  const bottomRow = processSteps.slice(3, 6);

  return (
    <section className="py-24 bg-primary-dark text-primary-dark-foreground">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-16">
          <h2 className="text-4xl md:text-5xl font-light">
            Our Process
          </h2>
          <p className="text-white/70 max-w-md text-sm leading-relaxed">
            A clear, reliable process designed to find the right people for your needs.
          </p>
        </div>

        {/* Process Steps - Desktop (2 rows of 3) */}
        <div className="hidden lg:block">
          {/* Top Row */}
          <div className="grid grid-cols-3 gap-x-8 mb-12">
            {topRow.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-4">
                  {/* Icon - White background with dark green color */}
                  <div className="w-14 h-14 shrink-0 bg-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer">
                    <step.icon size={24} strokeWidth={1.5} className="text-primary-dark" />
                  </div>
                  
                  {/* Curved Arrow (not after last in row) */}
                  {index < 2 && (
                    <div className="flex-1 flex justify-end">
                      <CurvedArrow />
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base font-medium mb-3">
                  {step.title}
                </h3>

                {/* Description with left border */}
                <div className="border-l-2 border-white/30 pl-4">
                  <p className="text-sm text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-3 gap-x-8">
            {bottomRow.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-4">
                  {/* Icon - White background with dark green color */}
                  <div className="w-14 h-14 shrink-0 bg-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer">
                    <step.icon size={24} strokeWidth={1.5} className="text-primary-dark" />
                  </div>
                  
                  {/* Curved Arrow (not after last in row) */}
                  {index < 2 && (
                    <div className="flex-1 flex justify-end">
                      <CurvedArrow />
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base font-medium mb-3">
                  {step.title}
                </h3>

                {/* Description with left border */}
                <div className="border-l-2 border-white/30 pl-4">
                  <p className="text-sm text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Steps - Tablet (horizontal with icons only) */}
        <div className="hidden md:flex lg:hidden items-center justify-between">
          {processSteps.map((step, index) => (
            <div key={step.title} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer">
                  <step.icon size={20} strokeWidth={1.5} className="text-primary-dark" />
                </div>
                <h3 className="text-xs font-medium max-w-[100px]">
                  {step.title}
                </h3>
              </motion.div>
              
              {index < processSteps.length - 1 && (
                <CurvedArrow className="mx-2 w-8 h-4" />
              )}
            </div>
          ))}
        </div>

        {/* Process Steps - Mobile (2 columns) */}
        <div className="md:hidden grid grid-cols-2 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 mb-3 bg-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer">
                <step.icon size={20} strokeWidth={1.5} className="text-primary-dark" />
              </div>
              <h3 className="text-sm font-medium mb-2">
                {step.title}
              </h3>
              <div className="border-l-2 border-white/30 pl-3">
                <p className="text-xs text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner Countries */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-sm text-white/60">
            Partner Countries: Thailand · Sri Lanka · Philippines · Nepal · India · Bangladesh
          </p>
        </motion.div>
      </div>
    </section>
  );
};
