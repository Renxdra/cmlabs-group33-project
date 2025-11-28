"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function AccountTab() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [errors, setErrors] = useState({
    newPassword: "",
    confirmPassword: "",
  })

  const [showPasswordRequirements, setShowPasswordRequirements] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Show password requirements when user starts typing in new password
    if (name === "newPassword" && value && !showPasswordRequirements) {
      setShowPasswordRequirements(true)
    }

    // Clear error when user starts typing
    if (name === "newPassword" && errors.newPassword) {
      setErrors(prev => ({ ...prev, newPassword: "" }))
    }
    if (name === "confirmPassword" && errors.confirmPassword) {
      setErrors(prev => ({ ...prev, confirmPassword: "" }))
    }
  }

  const validatePassword = (password: string, currentPassword: string) => {
    const newErrors = {
      newPassword: "",
      confirmPassword: "",
    }

    // Check if password meets requirements
    if (password.length < 8) {
      newErrors.newPassword = "The new Password must be at least 8 Characters long"
    } else if (!/(?=.*[a-zA-Z])(?=.*\d)/.test(password)) {
      newErrors.newPassword = "The new Password must include a combination of letters and numbers"
    } else if (password === currentPassword) {
      newErrors.newPassword = "The new Password cannot be the same as current password"
    }

    // Check if confirm password matches
    if (formData.confirmPassword && password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(newErrors)
    return !newErrors.newPassword && !newErrors.confirmPassword
  }

  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate passwords
    const isValid = validatePassword(formData.newPassword, formData.currentPassword)
    
    if (!isValid) {
      return
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setErrors(prev => ({ ...prev, confirmPassword: "Passwords do not match" }))
      return
    }

    console.log("Password changed:", formData)
    alert("Password updated successfully")
    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    })
    // Hide password requirements after successful submission
    setShowPasswordRequirements(false)
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-6">
          <span className="text-xl">🔒</span>
          Account
        </h3>
      </div>

      <form onSubmit={handleSaveChanges}>
        <div className="space-y-6">
          {/* Password Section */}
          <div>
            <h4 className="text-base font-semibold text-foreground mb-4">Password</h4>

            {/* Current Password */}
            <div className="mb-6">
              <label className="block text-sm text-muted-foreground mb-2">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                placeholder="Enter your current password"
                className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              />
            </div>

            {/* New Password */}
            <div className="mb-6">
              <label className="block text-sm text-muted-foreground mb-2">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="Enter your new password"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground ${
                  errors.newPassword ? "border-red-500" : "border-input"
                }`}
              />
              {/* Password Requirements - only show when user starts typing with smooth animation */}
              <div className={`mt-2 space-y-1 transition-all duration-300 ease-in-out ${
                showPasswordRequirements ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
              }`}>
                <p className={`text-xs transition-colors duration-200 ${
                  errors.newPassword ? "text-red-500" : "text-muted-foreground"
                }`}>
                  The new Password must be at least 8 Characters long
                </p>
                <p className={`text-xs transition-colors duration-200 ${
                  errors.newPassword ? "text-red-500" : "text-muted-foreground"
                }`}>
                  The new Password must include a combination of letters and numbers
                </p>
                <p className={`text-xs transition-colors duration-200 ${
                  errors.newPassword ? "text-red-500" : "text-muted-foreground"
                }`}>
                  The new Password cannot be the same as current password
                </p>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="mb-6">
              <label className="block text-sm text-muted-foreground mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your new password"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground ${
                  errors.confirmPassword ? "border-red-500" : "border-input"
                }`}
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          {/* Save Changes Button */}
          <div className="flex justify-end mt-8">
            <Button
              type="submit"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 flex items-center gap-2"
            >
              <span>💾</span>
              Save Changes
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}