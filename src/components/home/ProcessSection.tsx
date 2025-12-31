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
    viewBox="0 0 60 24" 
    fill="none" 
    className={`w-12 h-6 text-primary-foreground/40 ${className}`}
  >
    <path 
      d="M2 12C2 12 15 2 30 12C45 22 58 12 58 12" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round"
      fill="none"
    />
    <path 
      d="M52 8L58 12L52 16" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const ProcessSection = () => {
  const topRow = processSteps.slice(0, 3);
  const bottomRow = processSteps.slice(3, 6);

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-16">
          <h2 className="font-serif text-4xl md:text-5xl">
            Our Process
          </h2>
          <p className="text-primary-foreground/70 max-w-md text-sm leading-relaxed">
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
                  {/* Icon */}
                  <div className="w-14 h-14 shrink-0 border border-primary-foreground/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary-foreground/60 hover:shadow-[0_0_20px_rgba(250,250,245,0.3)] cursor-pointer">
                    <step.icon size={24} strokeWidth={1.5} />
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
                <div className="border-l-2 border-primary-foreground/30 pl-4">
                  <p className="text-sm text-primary-foreground/70 leading-relaxed">
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
                  {/* Icon */}
                  <div className="w-14 h-14 shrink-0 border border-primary-foreground/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary-foreground/60 hover:shadow-[0_0_20px_rgba(250,250,245,0.3)] cursor-pointer">
                    <step.icon size={24} strokeWidth={1.5} />
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
                <div className="border-l-2 border-primary-foreground/30 pl-4">
                  <p className="text-sm text-primary-foreground/70 leading-relaxed">
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
                <div className="w-12 h-12 mx-auto mb-3 border border-primary-foreground/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary-foreground/60 hover:shadow-[0_0_20px_rgba(250,250,245,0.3)] cursor-pointer">
                  <step.icon size={20} strokeWidth={1.5} />
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
              <div className="w-12 h-12 mb-3 border border-primary-foreground/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary-foreground/60 hover:shadow-[0_0_20px_rgba(250,250,245,0.3)] cursor-pointer">
                <step.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-medium mb-2">
                {step.title}
              </h3>
              <div className="border-l-2 border-primary-foreground/30 pl-3">
                <p className="text-xs text-primary-foreground/70 leading-relaxed">
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
          className="mt-16 pt-8 border-t border-primary-foreground/10 text-center"
        >
          <p className="text-sm text-primary-foreground/60">
            Partner Countries: Thailand · Sri Lanka · Philippines · Nepal · India · Bangladesh
          </p>
        </motion.div>
      </div>
    </section>
  );
};
