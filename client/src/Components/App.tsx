import Landing from "./LandingComponents/Landing"
import { Routes, Route } from 'react-router-dom'
import ChooseTemplate from "./TemplateComponents/ChooseTemplate"
import EditTemplate from "./TemplateComponents/EditTemplate"
function App() {

  return (
    <div className="min-h-screen bg-[#ffffff] font-Public">
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/templates" element={<ChooseTemplate />} />
          <Route path="/edit-template" element={<EditTemplate />} />
      </Routes>
    </div>
  )
}

export default App
