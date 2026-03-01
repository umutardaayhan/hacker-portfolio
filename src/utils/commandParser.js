export const parseCommand = (input) => {
  const trimmed = input.trim();
  
  if (!trimmed) return null;
  
  const tokens = trimmed.split(/\s+/);
  const command = tokens[0].toLowerCase();
  const args = tokens.slice(1);
  
  const flags = args.filter(arg => arg.startsWith('-'));
  const cleanArgs = args.filter(arg => !arg.startsWith('-'));
  
  return {
    command,
    args: cleanArgs,
    flags,
    raw: trimmed
  };
};

export const findCommand = (commandName, commands) => {
  if (commands[commandName]) {
    return commands[commandName];
  }
  
  for (const cmd of Object.values(commands)) {
    if (cmd.aliases?.includes(commandName)) {
      return cmd;
    }
  }
  
  return null;
};
