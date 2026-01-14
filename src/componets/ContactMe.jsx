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
        console.log('SUCCESS!');
        toast.success("Mail sent")
        form.current.reset(); // ✅ clears the form
      },
      (error) => {
        toast.error("Error")
        console.log('FAILED...', error.text);
      }
    );

  }

  return (
    <motion.section
      id="contactme"
      className="min-h-screen flex items-center justify-center px-4 "
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="w-full max-w-xl border-2  rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8 font-[Dancing_Script]">
          Contact Me
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1 font-[Dancing_Script]">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full px-4 py-2 border-2 rounded-lg
                         focus:outline-none focus:border-black transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium  mb-1 font-[Dancing_Script]">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border-2 rounded-lg
                         focus:outline-none focus:border-black transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium  mb-1 font-[Dancing_Script]">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Your message..."
              className="w-full px-4 py-2 border-2 rounded-lg
                         focus:outline-none focus:border-black transition resize-none"
            />
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2 rounded-full border-2
                           font-medium
                         hover:bg-white hover:text-black transition font-[Dancing_Script]"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Socials */}
        <div className="flex justify-center gap-6 mt-8">
          <motion.a
            href="https://github.com/rahulgope45"
            target="_blank"
            className="text-black text-xl hover:opacity-70 transition"
            whileHover={{ y: -3 }}
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/rahul-gope-808476369/"
            target="_blank"
            className="text-black text-xl hover:opacity-70 transition"
            whileHover={{ y: -3 }}
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </div>
    </motion.section>
  )
}

export default ContactMe
