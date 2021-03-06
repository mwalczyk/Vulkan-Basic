#version 450
#extension GL_ARB_separate_shader_objects : enable

layout(binding = 1) uniform sampler2D uTexSampler;

layout(location = 0) in vec3 vColor;
layout(location = 1) in vec2 vTexCoord;

layout(location = 0) out vec4 oColor;

void main()
{
  oColor = texture(uTexSampler, vTexCoord);
}
