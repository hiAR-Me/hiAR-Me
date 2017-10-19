package com.arproject.arproject.service;

import com.arproject.arproject.model.ArUser;
import com.arproject.arproject.model.ArUserFile;

public interface ArUserService {

  // *** ArUser ***
    ArUser findArUserById(int id);
    ArUser findByArUserName(String userName);
    ArUser addArUser(ArUser arUser);
    ArUser updateArUser(ArUser arUser);
    void deleteArUser(int id);

    // -- for development --
    void deleteAllArUsers();

  // *** ArUserFile ***
    ArUser addNewFile(ArUserFile arUserFile);
    ArUser deleteFile(int arUserId, int fileId);
}
