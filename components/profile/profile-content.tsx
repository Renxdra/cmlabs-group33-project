"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileCard } from "@/components/profile/profile-card"
import { ProfileTab } from "@/components/profile/profile-tab"
import { AccountTab } from "@/components/profile/account-tab"

export function ProfileContent() {

  return (
    <div className="p-8">
      {/* Header banner */}
      <div className="h-32 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mb-8"></div>

      <div className="flex gap-8">
        {/* Left sidebar - Profile card */}
        <div className="w-64">
          <ProfileCard />
        </div>

        {/* Right content - Tabs */}
        <div className="flex-1">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-background border-b border-border rounded-none h-auto p-0">
              <TabsTrigger
                value="profile"
                className="flex items-center gap-2 px-6 py-4 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-background rounded-none"
              >
                <span className="text-lg">👤</span>
                Profile
              </TabsTrigger>
              <TabsTrigger
                value="account"
                className="flex items-center gap-2 px-6 py-4 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-background rounded-none"
              >
                <span className="text-lg">🔒</span>
                Account
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="flex items-center gap-2 px-6 py-4 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-background rounded-none"
              >
                <span className="text-lg">🔔</span>
                Notifications
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="mt-0 p-6 bg-background">
              <ProfileTab />
            </TabsContent>

            <TabsContent value="account" className="mt-0 p-6 bg-background">
              <AccountTab />
            </TabsContent>

            <TabsContent value="notifications" className="mt-0 p-6 bg-background">
              <div className="text-muted-foreground">Notification settings coming soon...</div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}