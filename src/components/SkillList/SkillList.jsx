function Skill({ skill, level }) {
  return (
    <div>
      <div>{skill}</div>
      <div>Level {level}</div>
      <button>Github</button>
    </div>
  );
}

function SkillList() {
  const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];
  const levelValue = 100;
  // const SkillsElement = skills.map(skill => <li>{skill}</li>)

  const SkillsElement = skills.map((skill, index) => (
    <Skill skill={skill} level={levelValue} key={index} />
  ));
  console.log(SkillsElement);
  return (
    <div>
      <h2>Skill List Components</h2>
      <ul>{SkillsElement}</ul>
    </div>
  );
}
export default SkillList;
