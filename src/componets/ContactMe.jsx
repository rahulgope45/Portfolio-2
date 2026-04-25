import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from "framer-motion"
import toast from 'react-hot-toast'

const ContactMe = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_5743mmr',
      'template_c1t2vew',
      form.current,
      { publicKey: 'Blpte23f_C6o0prOS' }
    )
    .then(
      () => {
        toast.success("Mail sent")
        form.current.reset();
      },
      (error) => {
        toast.error("Error sending message")
        console.log('FAILED...', error.text);
      }
    );
  }

  return (
    <motion.section
      id="contactme"
      className="min-h-screen flex items-center justify-center px-4"
      // Refined animation: subtle scale + slide up
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        duration: 0.8 
      }}
    >
      <div className="w-full max-w-xl border-2 rounded-2xl p-8 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-center mb-8 font-[Dancing_Script]">
          Contact Me
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          {/* Name & Email inputs stay standard, but let's animate the Submit button */}
          <div>
            <label className="block text-sm font-medium mb-1 font-[Dancing_Script]">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-black bg-amber-100 text-black transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 font-[Dancing_Script]">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-black  bg-amber-100 text-black transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 font-[Dancing_Script]">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Your message..."
              className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-black  bg-amber-100 text-black transition resize-none"
            />
          </div>

          <div className="pt-2">
            <motion.button
              type="submit"
              // Add a slight "tap" and "hover" effect to the button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-2 rounded-full border-2 font-medium hover:bg-black hover:text-white transition-colors duration-300 font-[Dancing_Script]"
            >
              Send Message
            </motion.button>
          </div>
        </form>

        <div className="flex justify-center gap-6 mt-8">
          <motion.a
            href="https://github.com/rahulgope45"
            target="_blank"
            className="text-black text-xl"
            whileHover={{ y: -5, scale: 1.2, color: "#6e5494" }} // Color change on hover
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/rahul-gope-808476369/"
            target="_blank"
            className="text-black text-xl"
            whileHover={{ y: -5, scale: 1.2, color: "#0077b5" }} // Color change on hover
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </div>
    </motion.section>
  )
}

export default ContactMe