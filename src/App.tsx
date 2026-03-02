import React, { useState, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  User, 
  Briefcase, 
  Cpu, 
  Mail, 
  Shield, 
  Globe, 
  Lock,
  Monitor,
  Settings,
  Power,
  Key,
  Folder,
  Activity,
  FileText,
  Zap
} from 'lucide-react';
import { Window } from './components/Window';
import { Terminal, Bio, Projects, Skills, Contact, PasswordCracker, FileExplorer, NetworkMonitor, SystemMonitor, Notepad } from './components/Apps';
import { AppConfig, WindowState } from './types';
import { motion, AnimatePresence } from 'motion/react';

const APPS: AppConfig[] = [
  { id: 'terminal', name: 'Terminal.io', icon: TerminalIcon, component: Terminal },
  { id: 'bio', name: 'Bio.exe', icon: User, component: Bio },
  { id: 'projects', name: 'Projects.sh', icon: Briefcase, component: Projects },
  { id: 'skills', name: 'Skills.bin', icon: Cpu, component: Skills },
  { id: 'files', name: 'Files', icon: Folder, component: FileExplorer },
  { id: 'network', name: 'NetWatch', icon: Activity, component: NetworkMonitor },
  { id: 'system', name: 'SysStat', icon: Monitor, component: SystemMonitor },
  { id: 'notes', name: 'Notes.txt', icon: FileText, component: Notepad },
  { id: 'contact', name: 'Contact.txt', icon: Mail, component: Contact },
  { id: 'cracker', name: 'Cracker.exe', icon: Key, component: PasswordCracker },
];

export default function App() {
  const [windows, setWindows] = useState<Record<string, WindowState>>({});
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [maxZIndex, setMaxZIndex] = useState(10);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [isBooting, setIsBooting] = useState(true);
  const [bootLogs, setBootLogs] = useState<string[]>([]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    
    // Boot sequence simulation
    const logs = [
      'INITIALIZING NEO-OS KERNEL...',
      'CHECKING HARDWARE INTEGRITY...',
      'MOUNTING ROOT FILESYSTEM...',
      'ESTABLISHING ENCRYPTED TUNNEL...',
      'LOADING SYSTEM MODULES...',
      'STARTING DESKTOP ENVIRONMENT...',
      'ACCESS GRANTED. WELCOME ROOT.'
    ];
    
    let i = 0;
    const bootTimer = setInterval(() => {
      if (i < logs.length) {
        setBootLogs(prev => [...prev, logs[i]]);
        i++;
      } else {
        clearInterval(bootTimer);
        setTimeout(() => setIsBooting(false), 1000);
      }
    }, 400);

    return () => {
      clearInterval(timer);
      clearInterval(bootTimer);
    };
  }, []);

  const openApp = (appId: string) => {
    setWindows(prev => ({
      ...prev,
      [appId]: {
        id: appId,
        isOpen: true,
        isMinimized: false,
        isMaximized: false,
        zIndex: maxZIndex + 1,
        x: 100,
        y: 100,
      }
    }));
    setActiveWindow(appId);
    setMaxZIndex(prev => prev + 1);
    setIsStartMenuOpen(false);
  };

  const closeWindow = (id: string) => {
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], isOpen: false }
    }));
    if (activeWindow === id) setActiveWindow(null);
  };

  const toggleMinimize = (id: string) => {
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], isMinimized: !prev[id].isMinimized }
    }));
  };

  const toggleMaximize = (id: string) => {
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], isMaximized: !prev[id].isMaximized }
    }));
  };

  const focusWindow = (id: string) => {
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], zIndex: maxZIndex + 1, isMinimized: false }
    }));
    setActiveWindow(id);
    setMaxZIndex(prev => prev + 1);
  };

  if (isBooting) {
    return (
      <div className="h-screen w-screen bg-black flex flex-col items-center justify-center font-mono text-hacker-green p-8">
        <div className="w-full max-w-md space-y-2">
          <div className="text-4xl font-black mb-8 animate-pulse flex items-center gap-4">
            <Shield size={48} /> NEO-OS
          </div>
          {bootLogs.map((log, i) => (
            <div key={i} className="text-xs">
              <span className="opacity-50 mr-2">[{new Date().toLocaleTimeString()}]</span>
              {log}
            </div>
          ))}
          <div className="h-1 w-full bg-hacker-green/20 mt-8">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 3 }}
              className="h-full bg-hacker-green shadow-[0_0_10px_#00ff41]"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-hacker-bg select-none">
      {/* Desktop Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-hacker-green)_0%,_transparent_70%)] opacity-10" />
        <div className="h-full w-full flex items-center justify-center">
          <Globe size={600} strokeWidth={0.5} className="text-hacker-green animate-pulse" />
        </div>
      </div>

      {/* Desktop Widgets */}
      <div className="absolute top-8 left-8 z-10 space-y-6 pointer-events-none">
        <div className="bg-hacker-dark/40 border-l-4 border-hacker-green p-4 backdrop-blur-sm">
          <div className="text-4xl font-black tracking-tighter tabular-nums">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
          <div className="text-xs opacity-50 font-bold uppercase tracking-widest">
            {currentTime.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
          </div>
        </div>

        <div className="bg-hacker-dark/40 border-l-4 border-blue-500 p-4 backdrop-blur-sm flex items-center gap-4">
          <Activity size={24} className="text-blue-500" />
          <div>
            <div className="text-xs opacity-50 font-bold">SYSTEM_LOAD</div>
            <div className="text-lg font-bold">STABLE</div>
          </div>
        </div>
      </div>

      {/* Desktop Icons */}
      <div className="absolute top-8 right-8 z-10 grid grid-cols-1 gap-6">
        {APPS.slice(0, 6).map(app => (
          <button
            key={app.id}
            onDoubleClick={() => openApp(app.id)}
            onClick={() => openApp(app.id)}
            className="flex flex-col items-center gap-1 group w-20"
          >
            <div className="p-2 border-2 border-transparent group-hover:border-hacker-green group-hover:bg-hacker-green/10 transition-all rounded-sm">
              <app.icon size={28} />
            </div>
            <span className="text-[10px] font-bold text-center bg-hacker-dark/50 px-1 truncate w-full">{app.name}</span>
          </button>
        ))}
      </div>

      {/* Windows Layer */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <AnimatePresence>
          {Object.values(windows).map(win => {
            const app = APPS.find(a => a.id === win.id);
            if (!app || !win.isOpen) return null;
            return (
              <div key={win.id} className="pointer-events-auto">
                <Window
                  id={win.id}
                  title={app.name}
                  isOpen={win.isOpen}
                  isMinimized={win.isMinimized}
                  isMaximized={win.isMaximized}
                  zIndex={win.zIndex}
                  onClose={() => closeWindow(win.id)}
                  onMinimize={() => toggleMinimize(win.id)}
                  onMaximize={() => toggleMaximize(win.id)}
                  onFocus={() => focusWindow(win.id)}
                >
                  <app.component />
                </Window>
              </div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-hacker-green text-hacker-dark z-50 flex items-center px-2 gap-2 border-t-2 border-hacker-green">
        <button 
          onClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
          className={`px-4 h-full flex items-center gap-2 font-black uppercase tracking-tighter hover:bg-hacker-dark hover:text-hacker-green transition-colors ${isStartMenuOpen ? 'bg-hacker-dark text-hacker-green' : ''}`}
        >
          <Shield size={20} />
          Start
        </button>

        <div className="h-8 w-[2px] bg-hacker-dark/30 mx-1" />

        {/* Active Windows in Taskbar */}
        <div className="flex-1 flex gap-1 overflow-x-auto no-scrollbar">
          {Object.values(windows).filter(w => w.isOpen).map(win => {
            const app = APPS.find(a => a.id === win.id);
            return (
              <button
                key={win.id}
                onClick={() => focusWindow(win.id)}
                className={`px-3 h-9 flex items-center gap-2 text-xs font-bold border-2 transition-all ${
                  activeWindow === win.id 
                    ? 'bg-hacker-dark text-hacker-green border-hacker-dark' 
                    : 'bg-hacker-green/50 text-hacker-dark border-transparent hover:bg-hacker-green/80'
                }`}
              >
                {app && <app.icon size={14} />}
                <span className="truncate max-w-[100px]">{app?.name}</span>
              </button>
            );
          })}
        </div>

        <div className="h-8 w-[2px] bg-hacker-dark/30 mx-1" />

        {/* System Tray */}
        <div className="flex items-center gap-4 px-4 text-xs font-bold">
          <div className="flex items-center gap-1">
            <Zap size={14} className="animate-pulse" />
            ONLINE
          </div>
          <div className="tabular-nums">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </div>
        </div>
      </div>

      {/* Start Menu */}
      <AnimatePresence>
        {isStartMenuOpen && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="absolute bottom-12 left-0 w-72 bg-hacker-dark border-2 border-hacker-green z-[60] shadow-[0_0_30px_rgba(0,255,65,0.3)]"
          >
            <div className="bg-hacker-green text-hacker-dark p-4 font-bold flex items-center justify-between">
              <div className="flex items-center gap-2">
                <User size={20} />
                ROOT_USER
              </div>
              <div className="text-[10px] border border-hacker-dark px-1">ADMIN</div>
            </div>
            <div className="p-2 grid grid-cols-1 gap-1">
              {APPS.map(app => (
                <button 
                  key={app.id}
                  onClick={() => openApp(app.id)} 
                  className="w-full text-left p-2 hover:bg-hacker-green hover:text-hacker-dark flex items-center gap-3 text-sm transition-colors group"
                >
                  <app.icon size={16} className="group-hover:scale-110 transition-transform" /> 
                  <span className="flex-1">{app.name}</span>
                  <span className="text-[8px] opacity-30">EXEC</span>
                </button>
              ))}
              <div className="h-[1px] bg-hacker-green/30 my-2" />
              <button className="w-full text-left p-2 hover:bg-hacker-green hover:text-hacker-dark flex items-center gap-3 text-sm">
                <Settings size={16} /> System Config
              </button>
              <button className="w-full text-left p-2 hover:bg-red-600 hover:text-white flex items-center gap-3 text-sm">
                <Power size={16} /> Shut Down
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Scanline Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1000] crt-flicker opacity-10" />
    </div>
  );
}
