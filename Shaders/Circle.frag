#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;


float sdfCircle(vec2 p, float r) {
    sqrt(pow(p.x, 2.0) + pow(p.y, 2.0)) - r;
    return length(p) - r;
}


void main() {
    // Setup for the position in the middel
    vec2 uv = gl_FragCoord.xy / u_resolution;
    uv = uv - 0.5;
    uv = uv * u_resolution / 100.0;

    // Color
    vec3 color = vec3(uv.x, uv.y, 0.0);
    vec3 orange = vec3(0.9, 0.6, 0.3);
    vec3 blue = vec3(0.0, 0.5, 1.0);

    // Draw the circle
    float radius = 2.5;
    vec2 center = vec2(0.0, 0.0);
    float distanceToCircle = sdfCircle(uv - center, radius);
    color = distanceToCircle > 0.0 ? orange : blue;

    // Displace the scene
    gl_FragColor = vec4(color, 1.0);
}