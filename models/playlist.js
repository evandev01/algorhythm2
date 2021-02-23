module.exports = function(sequelize, DataTypes){
    const Playlist = sequelize.define('Playlist', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        playlistName: DataTypes.STRING,
        songID: DataTypes.INTEGER
    });

    Playlist.associate = model => {
        Playlist.hasMany(model.Song, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Playlist;
};