import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, ArrowRight } from 'lucide-react';

const LOGO_URL = '/assets/logo.png';

const contactInfo = [
  {
    icon: Phone,
    title: 'Jean Snr Conradie - COO',
    value: '082 800 2829',
    href: 'tel:0828002829',
  },
  {
    icon: Phone,
    title: 'Jean Jnr Conradie - Sales Manager',
    value: '064 651 7446',
    href: 'tel:0646517446',
  },
  {
    icon: Phone,
    title: 'Sikes - Operations Manager',
    value: '082 094 9605',
    href: 'tel:0820949605',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'integrationsspecialists@gmail.com',
    href: 'mailto:integrationsspecialists@gmail.com',
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0b1324] px-4 py-20 sm:px-6 md:py-24"
    >
      <div className="absolute inset-0">
        <div className="absolute left-[-8%] top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-[-5%] h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_38%)]" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-3xl"
      >
        <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(30,39,62,0.96),rgba(23,31,51,0.96))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8 md:p-10">
          <div className="flex items-center gap-4 border-b border-white/10 pb-7">
            <img
              src={LOGO_URL}
              alt="Conradie Family logo"
              className="h-12 w-12 rounded-xl object-contain md:h-14 md:w-14"
            />
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-[2.2rem]">
                Conradie Family
              </h2>
              <p className="mt-1 text-base text-slate-400 md:text-[1.05rem]">
                System&apos;s Integration Specialists
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4 md:mt-9 md:space-y-5">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.15 + index * 0.1 }}
                className="group flex items-center gap-4 rounded-[24px] px-1 py-1.5 transition-colors duration-300 hover:bg-white/5"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 shadow-[0_12px_30px_rgba(45,212,191,0.2)] md:h-[54px] md:w-[54px]">
                  <item.icon className="h-6 w-6 text-white md:h-5 md:w-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm text-slate-400 md:text-[0.95rem]">
                    {item.title}
                  </p>
                  <p className="truncate text-xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300 md:text-[1.05rem]">
                    {item.value}
                  </p>
                </div>

                <ArrowRight className="h-6 w-6 shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-300 md:h-7 md:w-7" />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="mailto:integrationsspecialists@gmail.com?subject=Enquiry from Website"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 px-8 py-4 text-lg font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(34,211,238,0.28)] md:mt-10 md:py-5 md:text-[1.05rem]"
          >
            Send an Enquiry
            <ArrowRight className="h-6 w-6 md:h-5 md:w-5" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
