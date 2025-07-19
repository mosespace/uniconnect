import { MainLayout } from "@/components/main-layout"
import { SpinWheel } from "@/components/spin-wheel"
import { RewardHistory } from "@/components/reward-history"

export default function SpinWinPage() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            🎁 Spin & Win
          </h1>
          <p className="text-muted-foreground text-lg">Spin daily for amazing rewards and profile boosts!</p>
        </div>

        <SpinWheel />
        <RewardHistory />
      </div>
    </MainLayout>
  )
}
