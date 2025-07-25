import React from 'react'

const Features = () => {
  return (
    <>
          <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-3 gap-10 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">🧲 Lead Management</h3>
          <p className="text-gray-600">Capture, assign, and track leads from 99acres, MagicBricks, and Facebook Ads.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">📞 Follow-Up Automation</h3>
          <p className="text-gray-600">Reminders, site visit tracking, and WhatsApp alerts to never miss a follow-up.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">🏠 Property Inventory</h3>
          <p className="text-gray-600">Manage all your projects, towers, and units — and track bookings live.</p>
        </div>
      </section>

    </>
  )
}

export default Features