import React, { lazy, Suspense } from "react";
import HomePage from "../pages/landing/Home";
import ClientPage from "../pages/landing/Client";
import CandidatePage from "../pages/landing/Candidates";
import PrivacyPolicy from "../pages/landing/PrivacyPolicy";
import CookiePolicy from "../pages/landing/CookiePolicy";
import NuclearEnergy from "../pages/landing/NuclearEnergy";
import NuclearMedicine from "../pages/landing/NuclearMedicine";
import AboutUs from "../pages/landing/AboutUs";
import CandidateCareer from "../pages/landing/CandidateCareer";
import AiInterview from "../pages/landing/AiInterview";
import { isPromise } from "formik";
import CvAnalysis from "../pages/landing/CvAnalysis";

export const nav = [
  {
    path: "/",
    name: "home",
    element: <HomePage />,
    isPrivate: false,
  },
  {
    path: "/client",
    name: "client",
    element: <ClientPage />,
    isPrivate: false,
  },
  {
    path: "/candidates",
    name: "candidates",
    element: <CandidatePage />,
    isPrivate: false,
  },
  {
    path: "/candidate-careers",
    name: "candidate-careers",
    element: <CandidateCareer />,
    isPrivate: false,
  },
  {
    path: "/cv-analysis",
    name: "analysie",
    element: <CvAnalysis />,
    isPrivate: false,
  },
  {
    path: "/nuclear-energy",
    name: "employer",
    element: <NuclearEnergy />,
    isPrivate: false,
  },
  {
    path: "/nuclear-medicine",
    name: "employer",
    element: <NuclearMedicine />,
    isPrivate: false,
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    element: <PrivacyPolicy />,
    isPrivate: false,
  },
  {
    path: "/cookie-policy",
    name: "cookie-policy",
    element: <CookiePolicy />,
    isPrivate: false,
  },
  {
    path: "/about-us",
    name: "about-us",
    element: <AboutUs />,
    isPrivate: false,
  },
  {
    path: "/ai-interviews",
    name: "ai-interviews",
    element: <AiInterview />,
    isPrivate: false,
  },
];
