"use client";

import { Button } from "@/components/ui/button";
import { createFirstDummySchool } from "./actions";

const CreateDummySchool = () => {
  function createFirstDummy() {
    createFirstDummySchool();
  }
  return <Button onClick={() => createFirstDummy()}>CreateDummySchool</Button>;
};

export default CreateDummySchool;
