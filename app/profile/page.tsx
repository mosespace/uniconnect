import { MainLayout } from "@/components/main-layout"
import { ProfileHeader } from "@/components/profile-header"
import { ProfileTabs } from "@/components/profile-tabs"

export default function ProfilePage() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <ProfileHeader />
        <ProfileTabs />
      </div>
    </MainLayout>
  )
}
