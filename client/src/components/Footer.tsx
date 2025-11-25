export function Footer() {
  return (
    <footer className="border-t bg-card/50 backdrop-blur-sm">
      <div className="flex items-center justify-center py-3 px-4">
        <p className="text-xs text-muted-foreground font-medium">
          Made with{" "}
          <a
            href="https://replit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold"
            data-testid="link-replit"
          >
            Replit
          </a>
        </p>
      </div>
    </footer>
  );
}
