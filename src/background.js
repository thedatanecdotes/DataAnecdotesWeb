// backgroundColor:"#8d99ae" |      value: "#d90429"
// 1st color:a4161a | 2: e00000 | 2041ac
import React from 'react';
import Particles from 'react-particles-js';
function BackgroundParticle() {
  return (
    <>
    <Particles
        style={{ position:"fixed",backgroundColor:"#a4161a"}}
        height="100%"
        width="100%"
        zindex="-1"
        params={{
          particles: {
            color: {
              value: "#000000"
            },
            number: {
              value: 114,
              density: {
                enable: true,
                value_area: 800
              }
            },
            line_linked: {
              color: {
                value: "#000000"
              }
            },
            size: {
              value: 3
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              },
              onclick: {
                enable: false,
                mode: "bubble"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 100,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
          
        }}
      />
 
    </>
  );
}

export default BackgroundParticle;
