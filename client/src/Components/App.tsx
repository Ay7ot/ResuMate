import Landing from "./LandingComponents/Landing"
import { Routes, Route } from 'react-router-dom'
import ChooseTemplate from "./TemplateComponents/ChooseTemplate"
import EditTemplate from "./TemplateComponents/EditTemplate"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { UserDetailsProvider } from "../Contexts/UserDetailContext";

function App() {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="min-h-[100dvh] bg-[#ffffff] font-Public">
        <UserDetailsProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/templates" element={<ChooseTemplate />} />
            <Route path="/edit-template" element={<EditTemplate />} />
          </Routes>
        </UserDetailsProvider>
      </div>
    </LocalizationProvider>
  )
}

export default App
