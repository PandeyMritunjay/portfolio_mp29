'use client'

import { FormEvent, useState } from 'react'
import { FiSend } from 'react-icons/fi'

export default function BottomContactBar() {
  const [formData, setFormData] = useState({ email: '', message: '' })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.email.trim() || !formData.message.trim()) {
      return
    }

    const mailtoLink = `mailto:mritunjaypandey0429@gmail.com?subject=Portfolio%20Contact&body=From:%20${encodeURIComponent(
      formData.email,
    )}%0D%0A%0D%0A${encodeURIComponent(formData.message)}`
    window.location.href = mailtoLink
    setFormData({ email: '', message: '' })
  }

  return (
    <section className="px-4 sm:px-8 lg:px-12 xl:px-20 pb-12">
      <div className="w-full max-w-6xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 rounded-2xl bg-gradient-to-r from-slate-900/80 via-blue-900/60 to-slate-900/80 border border-white/10 px-4 py-4 sm:px-6 sm:py-5 md:flex-row md:items-center md:gap-4 shadow-[0_10px_45px_rgba(15,23,42,0.5)]"
        >
          <div className="text-xs font-semibold tracking-[0.4em] uppercase text-white/60 text-center md:text-left">
            Let&apos;s Talk
          </div>

          <input
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            className="w-full rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition"
            required
          />

          <input
            type="text"
            placeholder="Send a message"
            value={formData.message}
            onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
            className="w-full rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition"
            required
          />

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500/90 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white hover:bg-blue-400 transition focus:outline-none focus:ring-2 focus:ring-blue-300/60"
          >
            <FiSend size={16} />
            Send
          </button>
        </form>
      </div>
    </section>
  )
}

