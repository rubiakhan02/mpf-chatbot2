import Chatbot from '../components/Chatbot/Chatbot';

export default function Home() {
    return (
        <main style={{ minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
            {/* Main Website Content Simulation */}
            <div style={{ textAlign: 'center', paddingTop: '100px', fontFamily: 'Outfit, sans-serif', color: '#334155' }}>
                <h1 style={{ fontWeight: 600, fontSize: '2.5rem', marginBottom: '10px' }}>MyPropertyFact</h1>
                <p style={{ fontSize: '1.2rem' }}>Your trusted real estate partner.</p>
                <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '20px' }}>(Click the chat icon in the bottom right)</p>
            </div>

            {/* Reusable Chatbot Component */}
            <Chatbot />
        </main>
    );
}
