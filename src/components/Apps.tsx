import React from 'react';

export const Terminal: React.FC = () => {
  const [history, setHistory] = React.useState<string[]>([
    'NEO-OS v2.4.0 (stable) initialized...',
    'Welcome back, Root.',
    'Type "help" for available commands.',
  ]);
  const [input, setInput] = React.useState('');

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newHistory = [...history, `> ${input}`];
    
    switch (input.toLowerCase().trim()) {
      case 'help':
        newHistory.push('Available commands: help, clear, whoami, ls, date, exit');
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'whoami':
        newHistory.push('User: root | Role: Lead Security Researcher');
        break;
      case 'ls':
        newHistory.push('bio.exe  projects.sh  skills.bin  contact.txt');
        break;
      case 'date':
        newHistory.push(new Date().toString());
        break;
      default:
        newHistory.push(`Command not found: ${input}`);
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="bg-black h-full p-4 font-mono text-sm overflow-y-auto">
      {history.map((line, i) => (
        <div key={i} className="mb-1">{line}</div>
      ))}
      <form onSubmit={handleCommand} className="flex">
        <span className="mr-2 text-hacker-green">$</span>
        <input
          autoFocus
          className="bg-transparent border-none outline-none flex-1 text-hacker-green"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
};

export const Bio: React.FC = () => (
  <div className="p-6 space-y-4 overflow-y-auto h-full bg-hacker-dark/90">
    <h2 className="text-2xl font-bold border-b border-hacker-green pb-2">IDENTITY_PROFILE</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border border-hacker-green p-4 bg-hacker-green/5">
        <img 
          src="https://picsum.photos/seed/hacker/300/300" 
          alt="Profile" 
          className="w-full grayscale contrast-150 border border-hacker-green mb-4"
          referrerPolicy="no-referrer"
        />
        <p className="text-xs opacity-70">ENCRYPTED_IMAGE_DATA_01</p>
      </div>
      <div className="space-y-4">
        <p><span className="opacity-50">[NAME]:</span> NEO / THE_ONE</p>
        <p><span className="opacity-50">[ROLE]:</span> FULL_STACK_DEVELOPER & CYBER_SECURITY_ENTHUSIAST</p>
        <p><span className="opacity-50">[LOCATION]:</span> THE_VOID (REMOTE)</p>
        <p className="leading-relaxed">
          I am a digital architect specializing in building secure, high-performance systems. 
          With a background in both offensive and defensive security, I approach development 
          with a "security-first" mindset.
        </p>
      </div>
    </div>
  </div>
);

export const Projects: React.FC = () => (
  <div className="p-6 space-y-6 overflow-y-auto h-full bg-hacker-dark/90">
    <h2 className="text-2xl font-bold border-b border-hacker-green pb-2">DEPLOYED_OPERATIONS</h2>
    <div className="grid grid-cols-1 gap-4">
      {[
        { title: 'Project: Aegis', desc: 'Real-time intrusion detection system using machine learning.', tech: 'Python, TensorFlow, React' },
        { title: 'Project: Cipher-X', desc: 'End-to-end encrypted messaging protocol for secure communications.', tech: 'Rust, WebAssembly, Node.js' },
        { title: 'Project: Ghost-Net', desc: 'Decentralized P2P network for censorship-resistant data sharing.', tech: 'Go, Libp2p, IPFS' },
      ].map((p, i) => (
        <div key={i} className="border border-hacker-green p-4 hover:bg-hacker-green/10 transition-colors cursor-pointer group">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold group-hover:underline">{p.title}</h3>
            <span className="text-xs border border-hacker-green px-2 py-1">STABLE</span>
          </div>
          <p className="text-sm opacity-80 mb-3">{p.desc}</p>
          <div className="text-xs opacity-50">STACK: {p.tech}</div>
        </div>
      ))}
    </div>
  </div>
);

export const Skills: React.FC = () => {
  const skills = [
    { name: 'Penetration Testing', level: 90 },
    { name: 'React / Next.js', level: 95 },
    { name: 'Node.js / Express', level: 85 },
    { name: 'Python / Automation', level: 80 },
    { name: 'Network Security', level: 75 },
    { name: 'Docker / Kubernetes', level: 70 },
  ];

  return (
    <div className="p-6 space-y-6 overflow-y-auto h-full bg-hacker-dark/90">
      <h2 className="text-2xl font-bold border-b border-hacker-green pb-2">TECHNICAL_CAPABILITIES</h2>
      <div className="space-y-4">
        {skills.map((s, i) => (
          <div key={i} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>{s.name}</span>
              <span>{s.level}%</span>
            </div>
            <div className="h-2 bg-hacker-green/10 border border-hacker-green/30">
              <div 
                className="h-full bg-hacker-green shadow-[0_0_10px_#00ff41]" 
                style={{ width: `${s.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Contact: React.FC = () => (
  <div className="p-6 space-y-6 overflow-y-auto h-full bg-hacker-dark/90">
    <h2 className="text-2xl font-bold border-b border-hacker-green pb-2">COMMUNICATION_UPLINK</h2>
    <div className="space-y-4">
      <p className="text-sm opacity-70">ESTABLISHING SECURE CONNECTION...</p>
      <div className="border border-hacker-green p-4 space-y-4 bg-hacker-green/5">
        <div className="flex items-center gap-4">
          <span className="w-24 opacity-50">[EMAIL]:</span>
          <a href="mailto:neo@thevoid.io" className="hover:underline">neo@thevoid.io</a>
        </div>
        <div className="flex items-center gap-4">
          <span className="w-24 opacity-50">[GITHUB]:</span>
          <a href="#" className="hover:underline">github.com/neo-root</a>
        </div>
        <div className="flex items-center gap-4">
          <span className="w-24 opacity-50">[SIGNAL]:</span>
          <span>+1 (555) 010-1010</span>
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs uppercase opacity-50">Send Encrypted Message</label>
        <textarea 
          className="w-full bg-black border border-hacker-green p-3 text-hacker-green outline-none focus:ring-1 focus:ring-hacker-green h-32"
          placeholder="Enter message payload..."
        />
        <button className="bg-hacker-green text-hacker-dark px-6 py-2 font-bold hover:bg-hacker-green/80 transition-colors">
          TRANSMIT_DATA
        </button>
      </div>
    </div>
  </div>
);

export const PasswordCracker: React.FC = () => {
  const [progress, setProgress] = React.useState(0);
  const [isCracking, setIsCracking] = React.useState(false);
  const [logs, setLogs] = React.useState<string[]>([]);

  React.useEffect(() => {
    let interval: any;
    if (isCracking && progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => {
          const next = prev + Math.random() * 5;
          if (next >= 100) {
            setIsCracking(false);
            setLogs(l => [...l, '[SUCCESS] Target decrypted. Access granted.']);
            return 100;
          }
          if (Math.random() > 0.7) {
            setLogs(l => [...l, `[INFO] Testing hash: ${Math.random().toString(36).substring(7)}`]);
          }
          return next;
        });
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isCracking, progress]);

  const startCrack = () => {
    setProgress(0);
    setIsCracking(true);
    setLogs(['[INIT] Starting brute force attack...', '[INFO] Targeting: 23.86.111.0']);
  };

  return (
    <div className="p-6 space-y-6 h-full bg-black text-hacker-green font-mono">
      <div className="border-2 border-hacker-green p-4 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">PASSWORD_CRACKER_v1.0</span>
          <div className={`w-3 h-3 rounded-full ${isCracking ? 'bg-red-500 animate-pulse' : 'bg-hacker-green'}`} />
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-1">
            <div className="opacity-50">TARGET_IP:</div>
            <div className="border border-hacker-green/30 p-1">23.86.111.0</div>
          </div>
          <div className="space-y-1">
            <div className="opacity-50">DATABASE:</div>
            <div className="border border-hacker-green/30 p-1">USER_TABLE / ADMIN</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span>BRUTE_FORCE_PROGRESS</span>
            <span>{Math.floor(progress)}%</span>
          </div>
          <div className="h-4 bg-hacker-green/10 border border-hacker-green">
            <div className="h-full bg-hacker-green transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <button 
          onClick={startCrack}
          disabled={isCracking}
          className={`w-full py-3 font-bold border-2 border-hacker-green transition-all ${
            isCracking ? 'opacity-50 cursor-not-allowed' : 'hover:bg-hacker-green hover:text-hacker-dark'
          }`}
        >
          {isCracking ? 'CRACKING_IN_PROGRESS...' : 'START_BRUTE_FORCE_ATTACK'}
        </button>

        <div className="h-32 bg-hacker-dark/50 border border-hacker-green/30 p-2 text-[10px] overflow-y-auto font-mono">
          {logs.map((log, i) => (
            <div key={i} className={log.includes('SUCCESS') ? 'text-white' : ''}>{log}</div>
          ))}
        </div>
      </div>
      <p className="text-[10px] opacity-50 text-center">
        LEGAL NOTICE: Using Password Cracker for harmful activities is strictly prohibited!
      </p>
    </div>
  );
};

export const FileExplorer: React.FC = () => {
  const files = [
    { name: 'root', type: 'dir', children: [
      { name: 'documents', type: 'dir', children: [
        { name: 'secret_plans.pdf', type: 'file', size: '2.4MB' },
        { name: 'manifesto.txt', type: 'file', size: '12KB' }
      ]},
      { name: 'bin', type: 'dir', children: [
        { name: 'crack.exe', type: 'file', size: '450KB' },
        { name: 'nmap', type: 'file', size: '1.2MB' }
      ]},
      { name: 'logs', type: 'dir', children: [
        { name: 'access_2024.log', type: 'file', size: '890KB' },
        { name: 'errors.log', type: 'file', size: '45KB' }
      ]}
    ]}
  ];

  const [path, setPath] = React.useState(['root']);
  
  const currentDir = React.useMemo(() => {
    let current: any = files[0];
    for (let i = 1; i < path.length; i++) {
      current = current.children.find((c: any) => c.name === path[i]);
    }
    return current;
  }, [path]);

  return (
    <div className="flex flex-col h-full bg-hacker-dark/90">
      <div className="bg-hacker-green/10 p-2 border-b border-hacker-green/30 flex items-center gap-2 text-xs">
        <button onClick={() => path.length > 1 && setPath(path.slice(0, -1))} className="hover:bg-hacker-green/20 px-2">UP</button>
        <div className="flex-1 bg-black/50 px-2 py-1 border border-hacker-green/20">
          {path.join('/')}
        </div>
      </div>
      <div className="flex-1 p-4 grid grid-cols-4 md:grid-cols-6 gap-4 overflow-y-auto">
        {currentDir.children?.map((f: any, i: number) => (
          <div 
            key={i} 
            onDoubleClick={() => f.type === 'dir' && setPath([...path, f.name])}
            className="flex flex-col items-center gap-1 cursor-pointer group"
          >
            <div className="p-2 group-hover:bg-hacker-green/10 border border-transparent group-hover:border-hacker-green/30">
              {f.type === 'dir' ? <div className="w-10 h-8 bg-hacker-green/40 rounded-sm relative after:content-[''] after:absolute after:top-[-4px] after:left-0 after:w-4 after:h-2 after:bg-hacker-green/40" /> : <div className="w-8 h-10 bg-hacker-green/20 border border-hacker-green/40 relative after:content-[''] after:absolute after:top-0 after:right-0 after:w-3 after:h-3 after:bg-hacker-dark after:border-l after:border-b after:border-hacker-green/40" />}
            </div>
            <span className="text-[10px] text-center truncate w-full">{f.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const NetworkMonitor: React.FC = () => {
  const [packets, setPackets] = React.useState<any[]>([]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const newPacket = {
        id: Math.random().toString(36).substr(2, 9),
        src: `192.168.1.${Math.floor(Math.random() * 255)}`,
        dst: `10.0.0.${Math.floor(Math.random() * 255)}`,
        proto: ['TCP', 'UDP', 'ICMP', 'HTTP'][Math.floor(Math.random() * 4)],
        len: Math.floor(Math.random() * 1500),
        time: new Date().toLocaleTimeString()
      };
      setPackets(prev => [newPacket, ...prev].slice(0, 20));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 h-full bg-black font-mono text-[10px] overflow-hidden flex flex-col">
      <div className="grid grid-cols-6 border-b border-hacker-green/50 pb-1 mb-2 opacity-70">
        <span>TIME</span>
        <span>SOURCE</span>
        <span>DESTINATION</span>
        <span>PROTO</span>
        <span>LENGTH</span>
        <span>ID</span>
      </div>
      <div className="flex-1 overflow-y-auto space-y-1">
        {packets.map(p => (
          <div key={p.id} className="grid grid-cols-6 hover:bg-hacker-green/10">
            <span>{p.time}</span>
            <span className="text-blue-400">{p.src}</span>
            <span className="text-red-400">{p.dst}</span>
            <span className="text-yellow-400">{p.proto}</span>
            <span>{p.len}</span>
            <span className="opacity-50">{p.id}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 h-24 border-t border-hacker-green/30 pt-2">
        <div className="flex items-end gap-1 h-full">
          {Array.from({ length: 40 }).map((_, i) => (
            <div 
              key={i} 
              className="flex-1 bg-hacker-green/40" 
              style={{ height: `${Math.random() * 100}%` }} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const SystemMonitor: React.FC = () => {
  const [stats, setStats] = React.useState({ cpu: 12, ram: 45, disk: 78 });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        cpu: Math.floor(Math.random() * 40) + 5,
        ram: Math.floor(Math.random() * 10) + 40,
        disk: 78
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 space-y-8 h-full bg-hacker-dark/95">
      <div className="space-y-4">
        <div className="flex justify-between items-end">
          <h3 className="text-lg font-bold">CPU_USAGE</h3>
          <span className="text-2xl font-black">{stats.cpu}%</span>
        </div>
        <div className="h-4 bg-hacker-green/10 border border-hacker-green">
          <div className="h-full bg-hacker-green shadow-[0_0_15px_#00ff41]" style={{ width: `${stats.cpu}%` }} />
        </div>
        <div className="grid grid-cols-8 gap-1">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-8 border border-hacker-green/30 flex items-center justify-center text-[8px]">
              CORE_{i}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-end">
          <h3 className="text-lg font-bold">MEMORY_LOAD</h3>
          <span className="text-2xl font-black">{stats.ram}%</span>
        </div>
        <div className="h-4 bg-hacker-green/10 border border-hacker-green">
          <div className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6]" style={{ width: `${stats.ram}%` }} />
        </div>
        <div className="text-[10px] opacity-50">SWAP: 1.2GB / 8.0GB | CACHED: 4.5GB</div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="border border-hacker-green/30 p-4 space-y-2">
          <div className="text-xs opacity-50">UPTIME</div>
          <div className="text-xl font-bold">12:45:02:11</div>
        </div>
        <div className="border border-hacker-green/30 p-4 space-y-2">
          <div className="text-xs opacity-50">TEMP</div>
          <div className="text-xl font-bold text-orange-500">42°C</div>
        </div>
      </div>
    </div>
  );
};

export const Notepad: React.FC = () => {
  const [content, setContent] = React.useState(`// SYSTEM_LOG_01
// DATE: 2024-03-15
// STATUS: CRITICAL

Target acquired at 23.86.111.0.
Firewall bypass successful.
Data extraction initiated.

TODO:
- Clean up traces
- Rotate proxy servers
- Update encryption keys
`);

  return (
    <div className="h-full flex flex-col bg-white text-black font-mono">
      <div className="bg-gray-200 p-1 flex gap-4 text-xs border-b border-gray-400">
        <span className="hover:bg-gray-300 px-2 cursor-pointer">File</span>
        <span className="hover:bg-gray-300 px-2 cursor-pointer">Edit</span>
        <span className="hover:bg-gray-300 px-2 cursor-pointer">Format</span>
        <span className="hover:bg-gray-300 px-2 cursor-pointer">Help</span>
      </div>
      <textarea 
        className="flex-1 p-4 outline-none resize-none bg-white text-black selection:bg-blue-200"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
  );
};
