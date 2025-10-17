
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import { FacebookIcon, InstagramIcon, LinkedinIcon, CheckCircleIcon } from '../components/IconComponents';


interface FormState {
    name: string;
    email: string;
    phone: string;
    inquiryType: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        email: '',
        phone: '',
        inquiryType: 'Admissions',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const validateField = (name: keyof FormState, value: string): string | undefined => {
        switch (name) {
            case 'name':
                if (!value.trim()) return 'Full name is required.';
                break;
            case 'email':
                if (!value.trim()) return 'Email address is required.';
                if (!/\S+@\S+\.\S+/.test(value)) return 'Email address is invalid.';
                break;
            case 'message':
                if (!value.trim()) return 'Message is required.';
                break;
            default:
                return undefined;
        }
        return undefined;
    };
    
    const validateForm = (): FormErrors => {
        const newErrors: FormErrors = {};
        const nameError = validateField('name', formData.name);
        if (nameError) newErrors.name = nameError;

        const emailError = validateField('email', formData.email);
        if (emailError) newErrors.email = emailError;

        const messageError = validateField('message', formData.message);
        if (messageError) newErrors.message = messageError;

        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target as { id: keyof FormState; value: string };
        setFormData(prev => ({ ...prev, [id]: value }));
        // Clear the error for this field as the user is typing
        if (errors[id as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [id]: undefined }));
        }
    };
    
    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target as { id: keyof FormState; value: string };
        const error = validateField(id, value);
        setErrors(prev => ({ ...prev, [id]: error }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError(null);

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // For this prototype, we'll simulate a success case.
        // In a real app, you would handle the fetch response.
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', inquiryType: 'Admissions', message: '' });
        setIsSubmitting(false);

        /*
        // Real API call logic:
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'An unexpected error occurred.');
            }

            setIsSubmitted(true);
            setFormData({ name: '', email: '', phone: '', inquiryType: 'Admissions', message: '' });
        } catch (error: any) {
            setSubmitError(error.message);
        } finally {
            setIsSubmitting(false);
        }
        */
    };

    return (
        <div>
            <HeroSection
                 title="Contact Us"
                 subtitle="We are here to help. Reach out to us with your questions, or schedule a visit to experience our campus firsthand."
                 imageUrl="https://picsum.photos/1920/1080?image=101"
            />

            <SectionWrapper>
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                         initial={{ opacity: 0, x: -50 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true, amount: 0.3 }}
                         transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-serif font-bold text-brand-blue-dark">Get in Touch</h2>
                        <p className="mt-4 text-gray-600">
                           Our team is ready to provide information about admissions, academic programs, events, and general school matters.
                        </p>
                        <div className="mt-8 space-y-4 text-gray-700">
                             <p><strong>Address:</strong> Kampala, Uganda</p>
                             <p><a href="https://www.google.com/maps/place/Better+Seed+International+School/@0.2980402,32.5963176,180m/data=!3m1!1e3!4m6!3m5!1s0x177dbd75eb2c4397:0x12edc85d8b56bd37!8m2!3d0.2980281!4d32.5967152!16s%2Fg%2F11wn4h_wkg" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">View on Google Maps</a></p>
                             <p><strong>Phone:</strong> <a href="tel:+2561234567890" className="text-brand-blue hover:underline">(+256) 123-456-7890</a></p>
                             <p><strong>Email:</strong> <a href="mailto:info@betterseeds.edu" className="text-brand-blue hover:underline">info@betterseeds.edu</a></p>
                             <div>
                                <strong>Office Hours:</strong>
                                <p className="text-sm">Monday – Friday: 8:00 AM – 5:00 PM</p>
                                <p className="text-sm">Saturday: 9:00 AM – 1:00 PM</p>
                             </div>
                             <div className="flex items-center space-x-4 pt-4">
                                <strong>Follow Us:</strong>
                                <a href="https://facebook.com" aria-label="Follow us on Facebook" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-blue"><FacebookIcon className="h-6 w-6"/></a>
                                <a href="https://instagram.com" aria-label="Follow us on Instagram" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-blue"><InstagramIcon className="h-6 w-6"/></a>
                                <a href="https://linkedin.com" aria-label="Follow us on LinkedIn" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-blue"><LinkedinIcon className="h-6 w-6"/></a>
                             </div>
                        </div>
                    </motion.div>

                     <motion.div
                         initial={{ opacity: 0, x: 50 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true, amount: 0.3 }}
                         transition={{ duration: 0.8 }}
                         className="bg-white p-8 rounded-lg shadow-lg"
                    >
                        {isSubmitted ? (
                            <div className="text-center py-12 px-6 flex flex-col items-center justify-center h-full bg-green-50 rounded-lg border border-green-200">
                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}>
                                    <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto mb-5" />
                                </motion.div>
                                <motion.h2 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="text-3xl font-serif font-bold text-brand-blue-dark"
                                >
                                    Message Sent Successfully!
                                </motion.h2>
                                <motion.p 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="mt-3 text-gray-600 max-w-sm"
                                >
                                    Thank you for reaching out to Better Seeds. Our team will review your message and get back to you shortly.
                                </motion.p>
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 w-full"
                                >
                                    <Button to="/" variant="primary" className="w-full sm:w-auto">Return to Homepage</Button>
                                    <Button to="/about" variant="secondary" className="w-full sm:w-auto">Learn More About Us</Button>
                                </motion.div>
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    onClick={() => setIsSubmitted(false)}
                                    className="mt-8 text-sm font-medium text-gray-600 hover:text-brand-blue hover:underline"
                                >
                                    Send Another Message
                                </motion.button>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-2xl font-serif font-bold text-brand-blue-dark mb-6">Send Us a Message</h2>
                                {submitError && (
                                    <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
                                        <span className="font-medium">Error!</span> {submitError}
                                    </div>
                                )}
                                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                        <input type="text" id="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} required className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue ${errors.name ? 'border-red-500' : 'border-gray-300'}`} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
                                        {errors.name && <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                        <input type="email" id="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} required className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue ${errors.email ? 'border-red-500' : 'border-gray-300'}`} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
                                        {errors.email && <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone (Optional)</label>
                                            <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                                        </div>
                                        <div>
                                            <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700">Inquiry Type</label>
                                            <select id="inquiryType" value={formData.inquiryType} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue">
                                                <option>Admissions</option>
                                                <option>Academics</option>
                                                <option>Careers</option>
                                                <option>General</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                        <textarea id="message" rows={4} value={formData.message} onChange={handleChange} onBlur={handleBlur} required className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue ${errors.message ? 'border-red-500' : 'border-gray-300'}`} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined}></textarea>
                                        {errors.message && <p id="message-error" className="mt-1 text-sm text-red-600">{errors.message}</p>}
                                    </div>
                                    <div>
                                        <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
                                            {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                                        </Button>
                                    </div>
                                </form>
                            </>
                        )}
                    </motion.div>
                </div>
            </SectionWrapper>

            <SectionWrapper className="!py-0">
                 <div className="text-center max-w-3xl mx-auto mb-8">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue-dark">Our Location</h2>
                     <p className="mt-4 text-lg text-gray-600">Visit us to experience our welcoming campus. We are conveniently located in Kampala.</p>
                </div>
                <div className="mt-8 rounded-lg overflow-hidden shadow-xl" style={{ height: '450px' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7979.606213606671!2d32.59414059695842!3d0.298034151703998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbd75eb2c4397%3A0x12edc85d8b56bd37!2sBetter%20Seed%20International%20School!5e0!3m2!1sen!2sus!4v1722359416489!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Better Seeds International School Location"
                    ></iframe>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default ContactPage;