#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_rez;
uniform vec2 u_mouse;

void main() {
	vec2 st = gl_FragCoord.xy/u_rez;
	float caca = step(0.5, st.x);
	vec3 color = vec3(caca);

	gl_FragColor = vec4(color, 1.0);
}