function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <div className="pt-24 max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <div className="prose prose-gray max-w-none">
          <p>We respect your privacy. This policy explains what information we collect and how we use it for our link-in-bio platform for creators and influencers.</p>
          <h2>Information we collect</h2>
          <ul>
            <li>Account details like email and username when you sign up.</li>
            <li>Profile content such as bio, avatar, and links you add.</li>
            <li>Usage analytics to improve performance and reliability.</li>
          </ul>
          <h2>How we use information</h2>
          <ul>
            <li>To provide and maintain your profile and link pages.</li>
            <li>To communicate important updates and support.</li>
            <li>To protect accounts and prevent abuse.</li>
          </ul>
          <h2>Your choices</h2>
          <p>You can request data export or deletion anytime by contacting support. We do not sell your data.</p>
          <p className="text-sm text-gray-500">Effective date: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}

export default Privacy
