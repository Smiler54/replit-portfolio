import { useEffect, useRef } from "react";
import { Smartphone, BarChart3, Shield, Database, GitBranch, Container } from "lucide-react";

declare global {
  interface Window {
    Chart: any;
  }
}

export default function SkillsSection() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<any>(null);

  useEffect(() => {
    const loadChart = async () => {
      if (typeof window !== 'undefined' && !window.Chart) {
        // Load Chart.js from CDN
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
        script.onload = () => {
          initChart();
        };
        document.head.appendChild(script);
      } else if (window.Chart) {
        initChart();
      }
    };

    const initChart = () => {
      if (chartRef.current && window.Chart) {
        const ctx = chartRef.current.getContext('2d');
        
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        
        chartInstance.current = new window.Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Full Stack Development', 'AI & Machine Learning', 'Blockchain & Web3', 'DevOps & Cloud', 'Database Design', 'System Architecture'],
            datasets: [{
              data: [95, 90, 85, 80, 85, 80],
              backgroundColor: [
                'hsl(217 91% 60%)',
                'hsl(142 76% 36%)',
                'hsl(262 83% 58%)',
                'hsl(37 91% 55%)',
                'hsl(220 17% 17%)',
                'hsl(346 87% 43%)'
              ],
              borderWidth: 0,
              cutout: '60%'
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  color: 'hsl(220 9% 95%)',
                  padding: 20,
                  font: {
                    size: 14
                  }
                }
              }
            }
          }
        });
      }
    };

    loadChart();

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  const skills = [
    { name: "Full Stack Development", percentage: 95 },
    { name: "AI & Machine Learning", percentage: 90 },
    { name: "Blockchain & Smart Contracts", percentage: 85 },
    { name: "React / Next.js / Vue.js", percentage: 90 },
    { name: "Node.js / Python / Solidity", percentage: 88 },
    { name: "Database & Cloud Architecture", percentage: 85 }
  ];

  const additionalSkills = [
    { icon: GitBranch, name: "Web3.js" },
    { icon: Container, name: "Docker" },
    { icon: Database, name: "TensorFlow" },
    { icon: Smartphone, name: "Ethereum" },
    { icon: BarChart3, name: "PyTorch" },
    { icon: Shield, name: "Solidity" }
  ];

  return (
    <section id="skills" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text" data-testid="skills-title">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="skills-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Skills Chart */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center" data-testid="skills-chart-title">Technical Proficiency</h3>
            <div className="bg-background rounded-2xl p-6">
              <canvas ref={chartRef} width="400" height="400" data-testid="skills-chart"></canvas>
            </div>
          </div>
          
          {/* Skills Bars */}
          <div>
            <h3 className="text-2xl font-bold mb-6" data-testid="skills-bars-title">Core Technologies</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} data-testid={`skill-${index}`}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold" data-testid={`skill-name-${index}`}>{skill.name}</span>
                    <span className="text-muted-foreground" data-testid={`skill-percentage-${index}`}>{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`skill-bar h-2 rounded-full transition-all duration-1000 ease-in-out ${
                        index < 2 ? 'bg-primary' : index < 4 ? 'bg-accent' : 'bg-secondary'
                      }`}
                      style={{ width: `${skill.percentage}%` }}
                      data-testid={`skill-bar-${index}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center" data-testid="additional-skills-title">Additional Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {additionalSkills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="text-center p-4 bg-background rounded-xl hover:bg-primary/10 transition-colors"
                data-testid={`additional-skill-${index}`}
              >
                <skill.icon className="w-8 h-8 text-primary mb-2 mx-auto" />
                <p className="font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
