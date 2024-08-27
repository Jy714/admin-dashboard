import React, { useState } from 'react'
import SettingSection from './SettingSection'
import ToggleSwitch from './ToggleSwitch'
import { Lock } from 'lucide-react'

const Security = () => {

  const [notifications,setNotifications] = useState(false)

  return (
    <SettingSection icon={Lock} title={"Security"}>
      <ToggleSwitch label={"Two-Factor Authentication"} isOn={notifications} onToggle={() => setNotifications(!notifications)} />
      
      <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto mt-5'>
				Edit Profile
			</button>
    </SettingSection>
  )
}

export default Security
