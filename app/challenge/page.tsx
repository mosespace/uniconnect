import { MainLayout } from "@/components/main-layout"
import { DailyChallenge } from "@/components/daily-challenge"
import { ChallengeHistory } from "@/components/challenge-history"
import { StreakProgress } from "@/components/streak-progress"

export default function ChallengePage() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            🎯 Daily Challenge
          </h1>
          <p className="text-muted-foreground text-lg">
            Complete daily challenges to earn points and build your streak!
          </p>
        </div>

        <StreakProgress />
        <DailyChallenge />
        <ChallengeHistory />
      </div>
    </MainLayout>
  )
}
