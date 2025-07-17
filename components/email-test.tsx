"use client"

import { useState } from "react"
import { ScrollButton } from "@/components/scroll-button"
import { testEmailConnection } from "@/utils/emailjs"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export function EmailTest() {
  const [isTestingConnection, setIsTestingConnection] = useState(false)
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleTestConnection = async () => {
    setIsTestingConnection(true)
    setTestResult(null)

    try {
      const isConnected = await testEmailConnection()

      if (isConnected) {
        setTestResult({
          success: true,
          message: "EmailJS connection successful! Test email sent.",
        })
      } else {
        setTestResult({
          success: false,
          message: "EmailJS connection failed. Please check your configuration.",
        })
      }
    } catch (error) {
      setTestResult({
        success: false,
        message: "Connection test failed with an error.",
      })
    } finally {
      setIsTestingConnection(false)
    }
  }

  return (
    <div className="p-6 bg-gray-50 rounded-lg border">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">EmailJS Connection Test</h3>
      <p className="text-gray-600 mb-4">
        Test the EmailJS integration to ensure form submissions are working correctly.
      </p>

      <ScrollButton
        onClick={handleTestConnection}
        disabled={isTestingConnection}
        className="bg-green-600 hover:bg-green-700 text-white mb-4"
      >
        {isTestingConnection ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Testing Connection...
          </>
        ) : (
          "Test EmailJS Connection"
        )}
      </ScrollButton>

      {testResult && (
        <div
          className={`p-4 rounded-lg flex items-start space-x-3 ${
            testResult.success ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
          }`}
        >
          {testResult.success ? (
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
          )}
          <div>
            <h4 className={`text-sm font-medium ${testResult.success ? "text-green-800" : "text-red-800"}`}>
              {testResult.success ? "Connection Successful" : "Connection Failed"}
            </h4>
            <p className={`text-sm mt-1 ${testResult.success ? "text-green-700" : "text-red-700"}`}>
              {testResult.message}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
