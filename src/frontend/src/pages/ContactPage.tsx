import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check, Mail, MapPin } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-12 mb-16"
        >
          <p className="font-body text-accent text-xs tracking-[0.3em] uppercase mb-3">
            Get In Touch
          </p>
          <h1 className="font-display text-6xl md:text-7xl font-black text-foreground leading-none">
            Contact.
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-10"
          >
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Let's talk.
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Have a question about sizing, shipping, or want to collaborate?
                We'd love to hear from you. Our team responds within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-accent/50 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={16} className="text-accent" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:hello@stryde.co"
                    className="font-body text-foreground hover:text-accent transition-colors"
                  >
                    hello@stryde.co
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-accent/50 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={16} className="text-accent" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">
                    Address
                  </p>
                  <p className="font-body text-foreground">
                    123 Design District
                    <br />
                    New York, NY
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="border border-accent/30 bg-accent/5 p-10 text-center space-y-4"
                  data-ocid="contact.form.success_state"
                >
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                    <Check size={24} className="text-accent" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    Message Sent!
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Thanks for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="font-body text-sm text-accent hover:text-accent/80 transition-colors tracking-widest uppercase"
                  >
                    Send Another →
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  data-ocid="contact.form.panel"
                >
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="name"
                      className="font-body text-xs tracking-widest uppercase text-muted-foreground"
                    >
                      Name
                    </Label>
                    <Input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      placeholder="Your name"
                      data-ocid="contact.name.input"
                      className="bg-card border-border/60 focus:border-accent rounded-none font-body"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="font-body text-xs tracking-widest uppercase text-muted-foreground"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      placeholder="your@email.com"
                      data-ocid="contact.email.input"
                      className="bg-card border-border/60 focus:border-accent rounded-none font-body"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="message"
                      className="font-body text-xs tracking-widest uppercase text-muted-foreground"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      placeholder="Tell us what's on your mind..."
                      data-ocid="contact.message.textarea"
                      className="bg-card border-border/60 focus:border-accent rounded-none font-body resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={submitting}
                    data-ocid="contact.form.submit_button"
                    className="w-full py-6 bg-accent text-accent-foreground hover:bg-accent/90 font-body text-sm tracking-widest uppercase rounded-none transition-all"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
