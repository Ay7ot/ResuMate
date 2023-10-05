import Landing from "./LandingComponents/Landing"
import { Routes, Route } from 'react-router-dom'
import ChooseTemplate from "./TemplateComponents/ChooseTemplate"
import EditTemplate from "./TemplateComponents/EditTemplate"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { UserDetailsProvider } from "../Contexts/UserDetailContext";
import { ColorProvider } from "../Contexts/ColorContext";
import PreviewResume from "./TemplateComponents/PreviewResume";
import Dashboard from "./DashboardComponents/Dashboard";

function App() {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="min-h-[100dvh] bg-[#ffffff] font-Public">
        <UserDetailsProvider>
          <ColorProvider>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/templates" element={<ChooseTemplate />} />
              <Route path="/edit-template" element={<EditTemplate />} />
              <Route path="/preview" element={<PreviewResume />} />
            </Routes>
          </ColorProvider>
        </UserDetailsProvider>
      </div>
    </LocalizationProvider>
  )
}

export default App
