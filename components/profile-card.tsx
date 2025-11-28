'use client'

import { useState, useRef } from 'react'

export function ProfileCard() {
  const [avatar, setAvatar] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleAvatarClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setAvatar(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="bg-card rounded-lg p-6 shadow-sm border border-[hsl(var(--border))]">
      {/* Avatar with edit icon */}
      <div className="flex justify-center mb-4">
        <div className="relative">
          <div 
            className="w-24 h-24 bg-muted rounded-full flex items-center justify-center cursor-pointer"
            onClick={handleAvatarClick}
          >
            {avatar ? (
              <div 
                className="w-full h-full rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${avatar})` }}
              />
            ) : (
              <span className="text-2xl text-foreground">👤</span>
            )}
          </div>
          <button 
            className="absolute bottom-0 right-0 bg-background p-2 rounded-full shadow-md border border-[hsl(var(--border))] cursor-pointer"
            onClick={handleAvatarClick}
          >
            <span className="text-sm">✏️</span>
          </button>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
      </div>

      {/* Name */}
      <h3 className="text-center text-lg font-semibold text-foreground mb-2">Mahendra</h3>

      {/* Status badge */}
      <div className="flex justify-center mb-4">
        <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">active</span>
      </div>

      {/* Contact info */}
      <div className="space-y-3 text-sm">
        <div className="flex items-start gap-3">
          <span className="text-muted-foreground">📞</span>
          <div>
            <p className="text-foreground">{'+62877532345764'}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-muted-foreground">📍</span>
          <div>
            <p className="text-foreground">{'Malang, Indonesia'}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-muted-foreground">✉️</span>
          <div>
            <p className="text-foreground">{'mahendrol23@gmail.com'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}