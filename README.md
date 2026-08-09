InterviewAIAn intelligent, interactive mock interview platform designed to help candidates prepare for technical, behavioral, and domain-specific job interviews using Generative AI.InterviewAI provides realistic interview simulations, dynamic question generation based on target roles or resumes, and real-time actionable feedback on candidate responses.✨ FeaturesTailored Mock Interviews: Generate custom interview questions tailored to specific job descriptions, experience levels, and tech stacks.AI-Powered Evaluation: Receive instant, granular feedback on technical accuracy, problem-solving approach, communication clarity, and tone.Resume Parsing: Upload resumes to experience dynamic questions centered on your specific projects and background.Real-time Interaction: Support for both text-based and speech-enabled (Voice-to-Text / Text-to-Speech) interview modes.Performance Analytics: Track performance metrics over time to identify strengths and areas for improvement.🛠️ Tech StackComponentTechnologyFrontendReact / Next.js, Tailwind CSSBackendNode.js (Express) / Python (FastAPI)AI / LLMOpenAI API / Google Gemini API / LangChainDatabasePostgreSQL / MongoDB / SupabaseAuthenticationNextAuth / Clerk / Firebase Auth🚀 Getting StartedPrerequisitesEnsure you have the following installed on your local machine:Node.js (v18.0.0 or higher)npm, yarn, or pnpmAPI Keys for the AI service (e.g., OpenAI API Key or Gemini API Key)InstallationClone the repository:Bashgit clone https://github.com/Sayan200427/InterviewAI.git
cd InterviewAI
Install dependencies:Bashnpm install
# or
yarn install
Configure Environment Variables:Create a .env.local or .env file in the root directory and add your credentials:Code snippetNEXT_PUBLIC_APP_URL=http://localhost:3000
DATABASE_URL=your_database_connection_string
OPENAI_API_KEY=your_openai_api_key
GEMINI_API_KEY=your_gemini_api_key
NEXTAUTH_SECRET=your_nextauth_secret
Run the development server:Bashnpm run dev
# or
yarn dev
Access the application:Open your browser and navigate to http://localhost:3000.⚙️ Environment Variables ReferenceVariableDescriptionRequiredOPENAI_API_KEYAPI key used for generating interview questions & feedbackYesDATABASE_URLDatabase connection stringYesNEXTAUTH_SECRETSecret key used for session encryptionYes🤝 ContributingContributions are welcome! To contribute:Fork the ProjectCreate your Feature Branch (git checkout -b feature/NewFeature)Commit your Changes (git commit -m 'Add some NewFeature')Push to the Branch (git push origin feature/NewFeature)Open a Pull Request📜 LicenseDistributed under the MIT License. See LICENSE for more information.
