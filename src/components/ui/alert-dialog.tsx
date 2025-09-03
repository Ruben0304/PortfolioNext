"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface AlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  actionText: string;
  onAction: () => void;
}

export function AlertDialog({
  isOpen,
  onClose,
  title,
  description,
  actionText,
  onAction,
}: AlertDialogProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Dialog */}
      <div
        className={cn(
          "relative w-full max-w-md mx-4 bg-card border border-border rounded-lg shadow-xl",
          "transform transition-all duration-200 scale-100 opacity-100"
        )}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-muted transition-colors"
        >
          <X size={16} className="text-muted-foreground" />
        </button>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-lg font-semibold text-foreground mb-2">
            {title}
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            {description}
          </p>

          {/* Actions */}
          <div className="flex gap-3 justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Cerrar
            </button>
            <button
              onClick={onAction}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              {actionText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}