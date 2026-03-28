import { useState } from "react";
import { MessageCircle, Send, X, Check, CheckCheck } from "lucide-react";

interface WhatsAppMockProps {
  open: boolean;
  onClose: () => void;
}

const WhatsAppMock = ({ open, onClose }: WhatsAppMockProps) => {
  const [sent, setSent] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const prefilledMessage = "Hi, I want to book an appointment";

  const handleSend = () => {
    setSent(true);
    setTimeout(() => {
      setShowPopup(true);
    }, 800);
  };

  const handleClose = () => {
    setSent(false);
    setShowPopup(false);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />

      {/* WhatsApp Window */}
      <div className="relative w-full max-w-sm bg-[#e5ddd5] rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
        {/* Header */}
        <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#25d366]/30 flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <div className="flex-1">
            <p className="text-white font-semibold text-sm">CityCare Clinic</p>
            <p className="text-white/70 text-xs">online</p>
          </div>
          <button onClick={handleClose} className="text-white/80 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Area */}
        <div
          className="p-4 min-h-[320px] flex flex-col justify-end gap-3"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L35 15 L30 25 L25 15Z' fill='%23d4cfc4' opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundColor: "#e5ddd5",
          }}
        >
          {/* Clinic welcome message */}
          <div className="flex justify-start">
            <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[80%] shadow-sm">
              <p className="text-[#303030] text-sm">
                👋 Welcome to CityCare Clinic! How can we help you today?
              </p>
              <p className="text-[#667781] text-[10px] text-right mt-1">10:30 AM</p>
            </div>
          </div>

          {/* User message */}
          <div className="flex justify-end">
            <div className="bg-[#dcf8c6] rounded-lg rounded-tr-none px-3 py-2 max-w-[80%] shadow-sm">
              <p className="text-[#303030] text-sm">{prefilledMessage}</p>
              <div className="flex items-center justify-end gap-1 mt-1">
                <p className="text-[#667781] text-[10px]">10:31 AM</p>
                {sent ? (
                  <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
                ) : (
                  <Check className="w-3.5 h-3.5 text-[#667781]" />
                )}
              </div>
            </div>
          </div>

          {/* Clinic reply after send */}
          {sent && (
            <div className="flex justify-start animate-fade-in">
              <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[80%] shadow-sm">
                <p className="text-[#303030] text-sm">
                  ✅ Thank you! Your appointment request is received. We'll confirm your slot shortly.
                </p>
                <p className="text-[#667781] text-[10px] text-right mt-1">10:31 AM</p>
              </div>
            </div>
          )}
        </div>

        {/* Input Bar */}
        {!sent && (
          <div className="bg-[#f0f0f0] px-3 py-2 flex items-center gap-2">
            <div className="flex-1 bg-white rounded-full px-4 py-2">
              <p className="text-[#303030] text-sm">{prefilledMessage}</p>
            </div>
            <button
              onClick={handleSend}
              className="w-10 h-10 rounded-full bg-[#25d366] flex items-center justify-center hover:bg-[#1fba59] transition-colors"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
        )}

        {/* Bottom bar after sent */}
        {sent && !showPopup && (
          <div className="bg-[#f0f0f0] px-3 py-3 text-center">
            <p className="text-[#667781] text-xs">Typing...</p>
          </div>
        )}
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="absolute inset-0 bg-black/40" onClick={handleClose} />
          <div className="relative bg-white rounded-2xl p-8 max-w-xs mx-4 text-center shadow-2xl animate-scale-in">
            <div className="w-16 h-16 rounded-full bg-[#25d366]/10 flex items-center justify-center mx-auto mb-4">
              <CheckCheck className="w-8 h-8 text-[#25d366]" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              This is how your patients will feel! 🎉
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Instant, easy booking — no phone calls needed. Your patients will love this experience.
            </p>
            <button
              onClick={handleClose}
              className="bg-[#25d366] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#1fba59] transition-colors text-sm"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppMock;
