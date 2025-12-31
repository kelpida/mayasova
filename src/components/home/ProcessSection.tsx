import { motion } from 'framer-motion';
import { ClipboardList, FileSearch, Users, FileText, GraduationCap, HeartHandshake } from 'lucide-react';

const processSteps = [
  { icon: ClipboardList, title: 'Client needs\nassessment', description: 'We identify your role requirements and expectations.' },
  { icon: FileSearch, title: 'CV Collection &\nScreening', description: 'We gather and assess candidate profiles from trusted partners.' },
  { icon: Users, title: 'Interview\nprocess', description: 'We conduct first interviews and coordinate employer discussions.' },
  { icon: FileText, title: 'Legal\nPaperwork', description: 'We manage all contracts, permits, and immigration documents.' },
  { icon: GraduationCap, title: 'Staff\nTraining', description: 'Domestic workers receive essential role-specific training.' },
  { icon: HeartHandshake, title: 'Ongoing\nSupport', description: 'We stay connected to ensure smooth, long-term cooperation.' },
];

export const ProcessSection = () => {
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

        {/* Process Steps - Desktop */}
        <div className="hidden md:grid grid-cols-6 gap-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center group"
            >
              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-4 border border-primary-foreground/30 rounded-sm flex items-center justify-center group-hover:bg-primary-foreground/10 transition-colors">
                <step.icon size={24} strokeWidth={1.5} />
              </div>

              {/* Connector Line */}
              {index < processSteps.length - 1 && (
                <div className="absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-px bg-primary-foreground/20" />
              )}

              {/* Title */}
              <h3 className="text-sm font-medium whitespace-pre-line mb-2">
                {step.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Process Steps - Mobile */}
        <div className="md:hidden grid grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 border border-primary-foreground/30 rounded-sm flex items-center justify-center">
                <step.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-medium whitespace-pre-line">
                {step.title}
              </h3>
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
