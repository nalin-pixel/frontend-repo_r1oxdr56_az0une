function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <div className="pt-24 max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <div className="prose prose-gray max-w-none">
          <p>Welcome to LinkCast, a link-in-bio platform for creators and influencers. By using our service, you agree to the following terms.</p>
          <h2>Use of service</h2>
          <p>You must comply with applicable laws. Do not misuse the service or infringe others' rights.</p>
          <h2>Accounts</h2>
          <p>You are responsible for safeguarding your account and for all activities under it.</p>
          <h2>Content</h2>
          <p>You own your content. You grant us a license to host and display it to operate the service.</p>
          <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}

export default Terms
