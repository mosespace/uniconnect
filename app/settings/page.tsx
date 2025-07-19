import { MainLayout } from "@/components/main-layout"
import { SettingsTabs } from "@/components/settings-tabs"

export default function SettingsPage() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">⚙️ Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences and privacy settings</p>
        </div>
        <SettingsTabs />
      </div>
    </MainLayout>
  )
}
