import Layout from '../components/layout';
import Button from '../components/button';

import { useState } from 'react';
import Editor from '@monaco-editor/react';

function CodeEditor() {
    const [code, setCode] = useState('//Start coding here');
    const [language, setLanguage]= useState('javascript');
    const [output, setOutput] = useState('');
    const [isRunning, setIsRunning] = useState(false);

    const handleRun = () => {

    setIsRunning(true) 

    setTimeout(() => {
        setOutput(`Running ${language} code...\n\n${code}`);
        setIsRunning(false)},
        2000
    )}

    const saveToDb = () => {
        alert("save code to database - Coming Soon!")
    }
    
    return (
        <Layout>
        <div className="p-6  min-h-screen">
            <h1 className="text-2xl text-gray-50 font-bold mb-4">Code Playground</h1>

            <div className="flex justify-between items-center mb-2">
                <select 
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="p-2 border rounded bg-white shadow"
                >
                    <option value="javascript">JS</option>
                    <option value="java">Java</option>
                    <option value="python">Python</option>
                    <option value="cpp">C++</option>
                </select>
            <div className="flex space-x-2">
                <Button onClick={saveToDb}>
                Save Code
                </Button>

                <Button onClick={handleRun} variant="primary" isLoading={isRunning}>
                Run
                </Button>
            </div>
            </div>

            <div className="border rounded-lg overflow-hidden shadow">
                <Editor 
                    height="500px"
                    defaultLanguage={language}
                    language={language}
                    theme="vs-dark"
                    value={code}
                    onChange={(value) => setCode(value)}
                />
            </div>

            {output && (
                <div className="mt-4 p-4 bg-black text-green-400 font-mono rounded">
                    <pre>{output}</pre>
                </div>
            )}
        </div>
        </Layout>
    );
}

export default CodeEditor;