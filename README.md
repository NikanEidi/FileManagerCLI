
# File Manager CLI

File Manager CLI is a command-line application that allows users to perform various file and directory operations interactively. The tool is modular, customizable, and designed for simplicity and efficiency.

## Features

- **List files and directories**: Explore directory contents.
- **Search files**: Search for files by name or size.
- **File manipulation**: Copy, move, and delete files or directories.
- **File analysis**: Analyze or preview file contents.
- **Favorite directories**: Add and manage frequently used directories.
- **File compression**: Compress multiple files or extract archives.
- **Dynamic themes**: Customize the CLI appearance with themes (`dark`, `light`, `neon`).
- **Logs**: View operational logs for tracking actions.

## Installation

1. Clone the repository or download the project files.
   ```bash
   git clone https://github.com/your-repository/filemanager-cli.git
   cd filemanager-cli
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

Start the application with the following command:
```bash
npm start
```

Once started, follow the interactive menu to perform operations.

## Menu Options

1. **List files and directories**: View the contents of a directory.
2. **Search for a file**: Find files by name in a specific directory.
3. **Copy a file**: Duplicate files from one location to another.
4. **Move a file**: Transfer files to a different location.
5. **Delete a file or directory**: Permanently remove files or directories.
6. **Analyze a file**: Gather metadata about a file.
7. **Preview a file**: Display the contents of text files.
8. **Add favorite directory**: Save frequently accessed directories.
9. **List favorite directories**: View saved favorite directories.
10. **Compress files**: Create a compressed archive of files.
11. **Extract archive**: Extract files from an archive.
12. **View logs**: Inspect logs for recent operations.
13. **Change theme**: Switch between `dark`, `light`, and `neon` themes.
14. **Exit**: Close the application.

## Themes

Customize the application's appearance using predefined themes. Change the theme using the `Change theme` option in the menu.

- **dark**: White text on a dark background.
- **light**: Black text on a light background.
- **neon**: Vibrant and colorful text.

## Dependencies

- **chalk**: For colorizing terminal output.
- **archiver**: For compressing files into archives.
- **unzipper**: For extracting files from archives.
- **fs**: File system operations.
- **readline**: Command-line interface for user input.

## Configuration

Settings are stored in `settings.json`. You can manually edit this file to change configurations like themes.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature"`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License.

---

Developed by Nikan Eidi
