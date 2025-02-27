import Image from 'next/image'

const Profile = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-8 h-8 rounded-full overflow-hidden">
        <Image
          src="/images.jpeg"
          alt="Profile picture"
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="text-sm font-medium">John Doe</h3>
        <p className="text-xs text-gray-600">Online</p>
      </div>
    </div>
  )
}

export default Profile 