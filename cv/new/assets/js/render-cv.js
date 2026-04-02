import { cvData } from "../../data/cv-data.js";

const header = document.getElementById("header");
const summary = document.getElementById("summary");
const skillsList = document.getElementById("skills-list");
const experienceList = document.getElementById("experience-list");
const educationList = document.getElementById("education-list");

const createElement = (tagName, className, textContent) => {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
};

const createItemBlock = ({ title, organization, period, details }) => {
  const item = createElement("article", "item");

  const itemHeader = createElement("div", "item-header");
  itemHeader.append(
    createElement("div", "title", title),
    createElement("div", "meta", period)
  );

  item.append(itemHeader, createElement("div", "subtitle", organization));

  if (Array.isArray(details) && details.length > 0) {
    const ul = document.createElement("ul");
    details.forEach((detail) => {
      ul.append(createElement("li", "", detail));
    });
    item.append(ul);
  }

  return item;
};

const renderHeader = () => {
  const { name, role, location, email, github, linkedin } = cvData.profile;

  const contactInfo = createElement("div", "contact-info");
  const emailLink = createElement("a", "", email);
  emailLink.href = `mailto:${email}`;

  const githubLink = createElement("a", "", github.replace("https://", ""));
  githubLink.href = github;
  githubLink.target = "_blank";
  githubLink.rel = "noreferrer";

  const linkedinLink = createElement("a", "", linkedin.replace("https://", ""));
  linkedinLink.href = linkedin;
  linkedinLink.target = "_blank";
  linkedinLink.rel = "noreferrer";

  contactInfo.append(
    createElement("span", "", location),
    emailLink,
    githubLink,
    linkedinLink
  );

  header.append(
    createElement("h1", "name", name),
    createElement("p", "role", role),
    contactInfo
  );

  document.title = `CV - ${name}`;
};

const renderSummary = () => {
  summary.textContent = cvData.summary;
};

const renderSkills = () => {
  cvData.skills.forEach((skill) => {
    skillsList.append(createElement("li", "", skill));
  });
};

const renderExperience = () => {
  cvData.experience.forEach((item) => {
    experienceList.append(createItemBlock(item));
  });
};

const renderEducation = () => {
  cvData.education.forEach((edu) => {
    educationList.append(
      createItemBlock({
        title: edu.degree,
        organization: edu.school,
        period: edu.period,
        details: []
      })
    );
  });
};

renderHeader();
renderSummary();
renderSkills();
renderExperience();
renderEducation();
