'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function ProfileTab() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-8">
        {/* Basic Information */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6">Basic information</h3>

          <div className="space-y-5">
            {/* Fullname */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Fullname</label>
              <div className="flex items-center gap-2">
                <span className="text-foreground">👤</span>
                <Input
                  type="text"
                  placeholder="Ketik disini..."
                  className="flex-1 border-[hsl(var(--border))]"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <div className="flex items-center gap-2">
                <span className="text-foreground">📧</span>
                <Input
                  type="email"
                  placeholder="Ketik disini..."
                  className="flex-1 border-[hsl(var(--border))]"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
              <div className="flex items-center gap-2">
                <span className="text-foreground">📞</span>
                <Input
                  type="tel"
                  placeholder="Ketik disini..."
                  className="flex-1 border-[hsl(var(--border))]"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Location</label>
              <div className="flex items-center gap-2">
                <span className="text-foreground">📍</span>
                <Input
                  type="text"
                  placeholder="Ketik disini..."
                  className="flex-1 border-[hsl(var(--border))]"
                />
              </div>
            </div>

            {/* Bio */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Bio</label>
              <textarea
                placeholder="Ketik disini..."
                rows={4}
                className="w-full px-3 py-2 border border-[hsl(var(--border))] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              />
              <p className="text-xs text-muted-foreground mt-1">0/160</p>
            </div>
          </div>
        </div>

        {/* Work Information */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6">Work information</h3>

          <div className="space-y-5">
            {/* Department */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Departemen</label>
              <div className="flex items-center gap-2">
                <span className="text-foreground">🏢</span>
                <Input
                  type="text"
                  placeholder="Ketik disini..."
                  className="flex-1 border-[hsl(var(--border))]"
                />
              </div>
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Role</label>
              <div className="flex items-center gap-2">
                <span className="text-foreground">💼</span>
                <Input
                  type="text"
                  placeholder="Ketik disini..."
                  className="flex-1 border-[hsl(var(--border))]"
                />
              </div>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Status</label>
              <span className="inline-block bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                active
              </span>
            </div>

            {/* Joined Date */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Joined Date</label>
              <div className="flex items-center gap-2">
                <span className="text-foreground">📅</span>
                <Input
                  type="date"
                  className="flex-1 border-[hsl(var(--border))]"
                />
              </div>
            </div>

            {/* Reports To */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Reports To</label>
              <div className="flex items-center gap-2">
                <span className="text-foreground">👨‍💼</span>
                <Input
                  type="text"
                  placeholder="Ketik disini..."
                  className="flex-1 border-[hsl(var(--border))]"
                />
              </div>
            </div>

            {/* Skills & Expertise */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Skills & Expertise</label>
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted text-foreground text-xs px-3 py-1 rounded-full flex items-center gap-2">
                  Wireframing <span className="cursor-pointer">✕</span>
                </span>
                <span className="bg-muted text-foreground text-xs px-3 py-1 rounded-full flex items-center gap-2">
                  Figma <span className="cursor-pointer">✕</span>
                </span>
                <span className="bg-muted text-foreground text-xs px-3 py-1 rounded-full flex items-center gap-2">
                  Design System <span className="cursor-pointer">✕</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save Changes Button */}
      <div className="flex justify-end mt-8">
        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          💾 Save Changes
        </Button>
      </div>
    </div>
  )
}