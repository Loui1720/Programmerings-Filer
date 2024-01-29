precision lowp float;

varying vec4 v_normal;
uniform float u_time;


void main() {
    // The ambient lighting
    vec3 ambient = vec3(0.5,0.5,0.5);

    // The diffuse lighting
    vec3 normal = normalize(v_normal.xyz);
    vec3 lightColor = vec3(0.5,0.5,0.5);
    vec3 lightSource = vec3(1.0*sin(u_time*2.0),1.0*sin(u_time*3.0),1.0*sin(u_time*5.0));
    float diffuseStrength = max(0.0, dot(lightSource, normal));
    vec3 diffuse = diffuseStrength * lightColor;

    // The specular lighting
    vec3 cameraSource = vec3(0.0, 0.0, 1.0);
    vec3 viewSource = normalize(cameraSource);
    vec3 reflectSource = normalize(reflect(-lightSource, normal));
    float specularStrength = max(0.0, dot(viewSource, reflectSource));
    specularStrength = pow(specularStrength, 50.0);
    vec3 specular = specularStrength * lightColor;

    // Lighting = ambient + diffuse + specular
    vec3 lighting = vec3(0.0,0.0,0.0);

    lighting = ambient;
    lighting = ambient * 0.0 + diffuse;
    lighting = ambient * 0.0 + diffuse * 1.0 + specular * 1.0;

    vec3 modelColor = vec3(1.0, 1.0, 1.0);
    vec3 color = modelColor * 0.1 + lighting;

    gl_FragColor = vec4(color, 1.0);
}