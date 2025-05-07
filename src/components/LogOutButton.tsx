"use client";

import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function LogOutButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogOut = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const errorMessage = null;

    if (!errorMessage) {
      toast.success("You have been successfully logged out", {
        description: "LoggedOut",
      });
      router.push("/");
    } else {
      toast.error("An error occurred while logging out", {
        description: "Error",
      });
    }

    setLoading(false);
  };

  return (
    <Button variant="outline" onClick={handleLogOut} disabled={loading} className="w-24">
      {loading ? <Loader2 className="animate-spin" /> : "LogOut"}
    </Button>
  );
}

export default LogOutButton;
