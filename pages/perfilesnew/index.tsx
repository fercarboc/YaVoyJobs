import React from "react";
import type { AuthState } from "@/types";
import ProfileRouter from "./ProfileRouter";

type PerfilPageProps = {
  auth: AuthState;
};

const PerfilPage: React.FC<PerfilPageProps> = ({ auth }) => <ProfileRouter auth={auth} />;

export default PerfilPage;
